## Getting start

### Install packages

```bash
yarn install
```

### Development mode

Create a `public` folder into the root folder.

Create an `index.html` into the `public` folder.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Galaxis Footer</title>
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
    </style>
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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    // You can import the developing component.
  </React.StrictMode>,
);
```

Rename the `src/index.ts` to `src/ignore-index.ts`.

```bash
yarn run start
```

#### Component creation

### Git push

Rename the `ignore-index.ts` to `index.ts`.

Create a commit then push the commit.
