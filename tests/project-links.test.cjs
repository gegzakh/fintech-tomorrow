const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { test } = require('node:test');
const html = readFileSync(join(__dirname, '..', 'index.html'), 'utf8');

test('BankGraph opens the live demo in both HTML and hydrated data', () => {
  const card = html.match(/<a class="project violet"[\s\S]*?<\/a>/)[0];
  assert.match(card, /href="https:\/\/bankgraph-demo\.vercel\.app\/"/);
  assert.match(card, /target="_blank"/);
  assert.match(card, /Open live demo/);
  assert.doesNotMatch(card, /Coming soon|href="#contact"/);
  const payloads = [...html.matchAll(/self\.__VINEXT_RSC_CHUNKS__\.push\(("(?:\\.|[^"\\])*")\)/g)].map(match => JSON.parse(match[1])).join('');
  const link = payloads.match(/"className":"project violet"[^}]+/)[0];
  assert.match(link, /"href":"https:\/\/bankgraph-demo\.vercel\.app\/"/);
  assert.match(link, /"target":"_blank"/);
});
