#!/usr/bin/env node
/**
 * Submit all URLs to IndexNow (Bing, Yandex, Seznam, Naver) and ping search engines.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITEMAP = path.join(ROOT, 'dist', 'sitemap-0.xml');
const HOST = 'rtc.shivrajsinh.in';
const KEY = '9f4c3a2b1e8d7c6b5a4f3e2d1c0b9a8f';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

if (!fs.existsSync(SITEMAP)) {
  console.error('dist/sitemap-0.xml not found! Run npm run build first.');
  process.exit(1);
}

const content = fs.readFileSync(SITEMAP, 'utf8');
const matches = [...content.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

console.log(`Found ${matches.length} URLs in sitemap.`);

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: matches,
};

async function submit() {
  try {
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    console.log(`IndexNow status: ${res.status} ${res.statusText}`);
    if (res.ok || res.status === 200 || res.status === 202) {
      console.log('✓ Successfully submitted URLs to IndexNow network (Bing, Yandex, Copilot).');
    } else {
      const txt = await res.text();
      console.warn(`IndexNow returned: ${txt}`);
    }
  } catch (err) {
    console.error('Error submitting to IndexNow:', err.message);
  }
}

submit();
