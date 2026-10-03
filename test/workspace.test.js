const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('Electron window uses isolated, sandboxed renderer with Node disabled', () => {
  const main = fs.readFileSync(path.join(__dirname, '..', 'src', 'main.js'), 'utf8');
  assert.match(main, /contextIsolation:\s*true/);
  assert.match(main, /nodeIntegration:\s*false/);
  assert.match(main, /sandbox:\s*true/);
});

test('UI follows the mockup layout and uses the supplied PNG artwork', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'src', 'index.html'), 'utf8');
  const assets = path.join(__dirname, '..', 'src', 'assets');
  assert.match(html, /src="assets\/vtv_icon\.png"/);
  assert.match(html, /src="assets\/vtv_splash\.png"/);
  assert.doesNotMatch(html, /<svg\b/);
  assert.equal(fs.existsSync(path.join(assets, 'vtv_icon.png')), true);
  assert.equal(fs.existsSync(path.join(assets, 'vtv_splash.png')), true);
  assert.match(html, /<button[^>]*disabled/);
  assert.match(html, /skyddas inte/);
});

test('renderer exposes no connect action or Node capability', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'src', 'index.html'), 'utf8');
  const preload = fs.readFileSync(path.join(__dirname, '..', 'src', 'preload.js'), 'utf8');
  assert.match(html, /<button[^>]*disabled/);
  assert.doesNotMatch(preload, /require\(['"]node:|require\(['"]child_process/);
});
