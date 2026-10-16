import assert from 'node:assert/strict';

const base = process.env.SMOKE_TEST_URL || 'http://localhost:3000';
for (const path of ['/', '/about', '/basketball', '/baseball', '/soccer', '/livescores', '/odds', '/logo.png', '/placeholder.jpg']) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
}
const html = await (await fetch(base)).text();
assert.ok(html.includes('KEYAM SPORTS'));
const styles = [...html.matchAll(/href="([^"]+\.css(?:\?[^"]*)?)"/g)];
assert.ok(styles.length, 'Production HTML must link generated CSS');
const css = (await Promise.all(styles.map(async ([, path]) => {
  const response = await fetch(new URL(path.replaceAll('&amp;', '&'), base));
  assert.equal(response.status, 200, path);
  return response.text();
}))).join('\n');
assert.ok(css.includes('.bg-primary'), 'Tailwind must generate custom utilities');
assert.ok(css.includes('.grid'), 'Tailwind must generate layout utilities');
const response = await fetch(base + '/api/run-agent', { method: 'POST' });
assert.equal(response.status, 503);
assert.deepEqual(await response.json(), { ok: false, error: 'The AI demo is not configured.' });
assert.equal((await fetch(base + '/api/run-agent')).status, 405);
assert.equal((await fetch(base + '/missing-page')).status, 404);
console.log('Production pages, assets, Tailwind and AI configuration handling passed.');
