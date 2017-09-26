# Contributing

## Editing the grid

1. `npm install` or `yarn install`
2. `npm start` or `yarn start`
3. In a browser, go to `http://localhost:3000`
4. Edit any file in `src/` and save to see changes.

## Adding an example

2. Within the new file within `docs/styles/`, create an `yourPageName.css`
3. Within the new file within `docs/`, create an html file:
```
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    {Your beautiful code}
    <link rel="stylesheet" type="text/css" href="../dist/grid.min.css">
    <link rel="stylesheet" type="text/css" href="./styles/yourPageName.css">
  </body>
</html>
```
4. Follow the "Editing the Grid" instructions above, but instead navigate to `http://localhost:3000/docs/index.html`
5. Finally, add a link to your example on this README before submitting a pull request.
