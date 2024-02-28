## Getting start

### Install packages
```bash
yarn install
```

### Development mode

Create a `public` folder into the root folder.

Create an index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Galaxis Footer</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```


Create an `index.tsx`

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

Rename the `src/index.ts` to `src/ignore-index.ts`.

```bash
yarn run start
```

### Git push

Rename the `ignore-index.ts` to `index.ts` and remove the `index.tsx`