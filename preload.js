const { contextBridge, shell } = require('electron');
const Sentry = require('@sentry/electron');

Sentry.init({
	dsn: 'DSN',
});

contextBridge.exposeInMainWorld(
	'api', {
		Sentry: Sentry,
	}
);

// preloadUndefined();

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
});