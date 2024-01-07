const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouse(url) {
  const chrome = await chromeLauncher.launch();
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance']
  };
  const runnerResult = await lighthouse(url, options);

  // Log the results
  console.log(`Lighthouse Score: ${runnerResult.lhr.categories.performance.score * 100}`);
  await chrome.kill();
}

runLighthouse('http://localhost:3000');