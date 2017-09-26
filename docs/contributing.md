# Contributing

## Editing the grid

1. `npm install` or `yarn install`
2. `npm start` or `yarn start`
3. In a browser, go to `http://localhost:3000`
4. Edit any file in `src/` and save to see changes.

## Adding an example

1. Within the new file within `docs/`, create an html file:
```
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    {Your beautiful code}
    <link rel="stylesheet" type="text/css" href="./ibm-grid.min.css">
  </body>
</html>
```
2. Follow the "Editing the Grid" instructions above, but instead navigate to `http://localhost:3000/docs/yourPageName.html`
3. Finally, add a link to your example on this README before submitting a pull request. The link should look like: `https://ibm.github.io/grid/yourPageName.html`
