## Objectif du site

Montrer les avancées des recherches et des résultats déjà obtenus.

## Comment faire pour afficher les github pages

Ajout de ce code dans package.json pour permettre l'ajout de github pages:

```
"name": "kg-fixed",
"private": true,
"version": "0.0.0",
"type": "module",
"homepage": "https://kgfixed.github.io/kg-fixed.github.io/",
```

Modification des informations dans vite.config.ts avec l'ajout de :

- base: './',

Cela m'a permit d'avoir bien accès à mes données dans le dossier assets de github-pages.

Pour lancer la publication de la page après modification du frontend:

- npm run build / build le projet
- npm run deploy / C'est cela qui publie la page

Ensuite attendre quelques minutes pour voir les modifications au lien :

- https://kgfixed.github.io/kg-fixed.github.io/

