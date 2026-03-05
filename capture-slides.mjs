import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function capture() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });

  const filePath = `file://${path.resolve(__dirname, 'instagram/instagram-carousel.html')}`;
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 2000));

  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const outPath = path.resolve(__dirname, `instagram/carousel-slide-${i + 1}.png`);
    await slides[i].screenshot({ path: outPath });
    console.log(`Saved: carousel-slide-${i + 1}.png`);
  }

  await browser.close();
  console.log('Done!');
}

capture().catch(console.error);
