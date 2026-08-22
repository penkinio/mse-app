# MSE CAD Engineering — Application Web

Application vitrine de MSE CAD Engineering (Génie Civil, Génie Électrique,
Génie Informatique), construite en React Native + React Native Web +
TypeScript avec Expo.

## Démarrage

```bash
npm install
npm run web       # lance le serveur de développement web
npm run ios       # nécessite macOS + Xcode
npm run android   # nécessite Android Studio
```

## État du projet — Étape 1 : initialisation & thème

Cette étape met en place :
- le projet Expo (SDK 57) + TypeScript, avec support web (`react-native-web`) ;
- l'architecture `src/` complète (voir ci-dessous) ;
- le thème de marque complet : couleurs, typographie (Big Shoulders, IBM Plex
  Sans, IBM Plex Mono), espacements, ombres.

`App.tsx` affiche pour l'instant un **aperçu du thème** (palette + typo), le
temps que la navigation soit construite à l'étape suivante — ce n'est pas
l'écran d'accueil définitif.

## Architecture

```
src/
├── api/          # Appels réseau (formulaire de contact, futur back-office)
├── assets/       # Images de contenu (voir src/assets/images/README.md)
├── components/   # Composants réutilisables (boutons, cartes, etc.)
├── constants/    # Données statiques (infos entreprise, futurs menus)
├── hooks/        # Hooks personnalisés
├── navigation/   # Configuration de la navigation (prochaine étape)
├── screens/      # Écrans de l'application
├── services/     # Logique métier (envoi d'email, upload de fichiers, etc.)
├── theme/        # Couleurs, typographie, espacements, ombres
├── types/        # Types TypeScript partagés
└── utils/        # Fonctions utilitaires
```

## Notes

- `AGENTS.md` / `CLAUDE.md` : notes pour les assistants IA (dont Claude) qui
  interviendront sur ce dépôt — à conserver.
- Les dossiers vides contiennent un `.gitkeep` en attendant leur premier
  fichier (prochaines étapes).
