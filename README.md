## Purpose of the site

Show the progress of research and the results already obtained.

## How to display github pages

Add this code to package.json to enable github pages to be added:

```
"name": "kg-fixed",
"private": true,
"version": "0.0.0",
"type": "module",
"homepage": "https://kgfixed.github.io/kg-fixed.github.io/",
```

Modification of the information in vite.config.ts with the addition of :

```
base: './',
```

This allowed me to access my data in the assets folder of github-pages.

To publish the page after modifying the frontend:

```
npm run build / build the projet
npm run deploy / This is what publishes the
```

Then wait a few minutes to see the changes to the link:

```
https://kgfixed.github.io/kg-fixed.github.io/
```

