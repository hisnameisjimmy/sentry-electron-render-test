# sentry-electron-render-test
A test of whether or not I can catch errors from renderer.js with contextisolation turned on. 

Associated with issue: https://github.com/getsentry/sentry-electron/issues/366

Setup:
- `npm install`
- Replace the 'DSN' in `main.js`, `preload.js`, and `renderer.js` with a working DSN. 
- `npm start`

Reproduce issue:
- Uncomment `mainUndefined();` in `main.js` and run `npm start`, see that it reports the exception correctly in Sentry
- Uncomment `preloadUndefined();` in `preload.js` and run `npm start`, see that it shows the exception in the DevTools console, but doesn't report to Sentry
- Uncomment `rendererUndefined();` in `renderer.js` and run `npm start`, see that it shows the exception in the DevTools console, but doesn't report to Sentry

You can also see that Sentry is available in the console because we log it from renderer. 
