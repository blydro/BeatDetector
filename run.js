const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--allow-file-access-from-files',
      '--autoplay-policy=no-user-gesture-required'
    ]
  });
  const page = await browser.newPage();
  await page.goto('file:///Users/blydro/code/BeatDetector/music.html');
})();
