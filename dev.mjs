import { createServer } from 'node:http';
import { watch } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4173);
const clients = new Set();
const reloadScript = '<script>new EventSource("/__reload").addEventListener("reload", () => location.reload());</script>';
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be a number from 1 to 65535');
}

let reloadTimer;
for (const directory of [root, join(root, 'assets')]) {
  watch(directory, (_event, filename) => {
    if (!filename || !/\.(html|css|js|png|svg)$/i.test(filename)) return;
    clearTimeout(reloadTimer);
    reloadTimer = setTimeout(() => {
      for (const client of clients) client.write('event: reload\ndata: changed\n\n');
    }, 100);
  });
}

createServer(async (request, response) => {
  if (request.method !== 'GET') {
    response.writeHead(405).end();
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    response.writeHead(400).end();
    return;
  }

  if (pathname === '/__reload') {
    response.writeHead(200, {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });
    response.write('retry: 1000\n\n');
    clients.add(response);
    response.on('close', () => clients.delete(response));
    return;
  }

  const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  if (relativePath.split('/').some((part) => part.startsWith('.'))) {
    response.writeHead(403).end();
    return;
  }
  const filePath = resolve(root, relativePath);
  if (!filePath.startsWith(`${root}${sep}`)) {
    response.writeHead(403).end();
    return;
  }

  try {
    let content = await readFile(filePath);
    const extension = extname(filePath).toLowerCase();
    if (extension === '.html') {
      content = Buffer.from(content.toString().replace('</body>', `${reloadScript}</body>`));
    }
    response.writeHead(200, {
      'Content-Type': contentTypes[extension] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    response.end(content);
  } catch (error) {
    response.writeHead(error.code === 'ENOENT' || error.code === 'EISDIR' ? 404 : 500).end();
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`SheetDelver site: http://127.0.0.1:${port}/`);
});
