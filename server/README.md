# Backend d'envoi — MSE CAD Engineering

Petit serveur Express qui reçoit les soumissions du formulaire de contact
du site (identité, besoin, pièces jointes) et les envoie par email via
[Resend](https://resend.com), pièces jointes comprises.

C'est un projet Node séparé de l'application Expo (`../`) : ils se
déploient indépendamment (le site en statique, ce serveur sur un hébergeur
Node).

## Démarrage local

```bash
cd server
npm install
cp .env.example .env   # puis renseigner au minimum RESEND_API_KEY
npm run dev
```

Le serveur écoute par défaut sur `http://localhost:4000`.
Route principale : `POST /api/contact` (`multipart/form-data`).
Vérification rapide : `GET /health` → `{ "status": "ok" }`.

## Configuration Resend

1. Créer un compte sur [resend.com](https://resend.com).
2. Pour envoyer depuis `contact@mse.cm`, vérifier le domaine `mse.cm` dans
   le dashboard Resend (ajout d'enregistrements DNS SPF/DKIM chez votre
   registrar). En attendant cette vérification, `onboarding@resend.dev`
   (fourni par Resend) fonctionne pour tester sans configuration DNS.
3. Générer une clé API dans le dashboard et la renseigner dans `.env`
   (`RESEND_API_KEY`).

## Déploiement

App Node standard, déployable sur n'importe quel hébergeur (Render,
Railway, Fly.io, un VPS avec PM2, etc.) :

```bash
npm run build
npm start
```

Une fois déployé, renseigner l'URL publique dans l'application front en
définissant, côté `../` (le projet Expo) :

```
EXPO_PUBLIC_CONTACT_API_URL=https://votre-serveur.example.com/api/contact
```

## Variables d'environnement

Voir `.env.example` pour la liste complète et leur rôle.

## Sécurité

- La validation des champs est refaite côté serveur (ne jamais se fier
  uniquement à la validation du navigateur).
- Le contenu saisi par les visiteurs est échappé avant d'être injecté dans
  le HTML de l'email (`src/services/emailService.ts`).
- `ALLOWED_ORIGIN` doit être restreint au domaine réel du site en
  production plutôt que laissé à `*`.
