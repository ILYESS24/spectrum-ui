# Guide de déploiement sur Vercel

Ce guide vous explique comment déployer Aurion UI sur Vercel.

## Prérequis

- Un compte Vercel (gratuit)
- Un compte GitHub/GitLab/Bitbucket avec votre code
- Les clés API nécessaires (voir ci-dessous)

## Variables d'environnement requises

Configurez ces variables dans le dashboard Vercel (Settings > Environment Variables) :

### Obligatoires
- `MONGODB_URL` - URL de connexion MongoDB
- `CLOUDINARY_CLOUD_NAME` - Nom de votre compte Cloudinary
- `CLOUDINARY_API_KEY` - Clé API Cloudinary
- `CLOUDINARY_API_SECRET` - Secret API Cloudinary
- `RESEND_API_KEY` - Clé API Resend pour les emails
- `EMAIL` - Email pour recevoir les notifications
- `ADMIN_EMAIL` - Email administrateur
- `ADMIN_PASSWORD` - Mot de passe administrateur

### Optionnelles
- `NEXT_PUBLIC_POSTHOG_KEY` - Clé PostHog pour l'analytics
- `NEXT_PUBLIC_POSTHOG_HOST` - Host PostHog
- `NEXT_PUBLIC_CRISP_WEBSITE_ID` - ID Crisp pour le chat
- `POLAR_ACCESS_TOKEN` - Token Polar pour les paiements
- `SUCCESS_URL` - URL de succès après paiement

## Étapes de déploiement

### Option 1 : Déploiement via GitHub (Recommandé)

1. **Poussez votre code sur GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Importez le projet sur Vercel**
   - Allez sur le dashboard Vercel
   - Connectez votre compte GitHub
   - Sélectionnez le dépôt `aurion-ui`
   - Vercel détectera automatiquement Next.js

3. **Configurez les variables d'environnement**
   - Dans les paramètres du projet, allez dans "Environment Variables"
   - Ajoutez toutes les variables listées ci-dessus
   - Cliquez sur "Deploy"

### Option 2 : Déploiement via CLI Vercel

1. **Installez Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Connectez-vous à Vercel**
   ```bash
   vercel login
   ```

3. **Déployez**
   ```bash
   vercel
   ```
   Suivez les instructions pour configurer le projet.

4. **Configurez les variables d'environnement**
   ```bash
   vercel env add MONGODB_URL
   vercel env add CLOUDINARY_CLOUD_NAME
   # ... répétez pour chaque variable
   ```

5. **Déployez en production**
   ```bash
   vercel --prod
   ```

## Configuration automatique

Le fichier `vercel.json` est déjà configuré avec :
- Framework Next.js détecté automatiquement
- Commandes de build et dev
- Région par défaut (iad1 - Washington D.C.)

## Vérification du déploiement

Après le déploiement :
1. Vérifiez que l'application fonctionne sur l'URL fournie par Vercel
2. Testez les fonctionnalités principales
3. Vérifiez les logs dans le dashboard Vercel en cas d'erreur

## Notes importantes

- Les variables d'environnement commençant par `NEXT_PUBLIC_` sont exposées au client
- Assurez-vous que MongoDB est accessible depuis Internet (pas seulement localhost)
- Vercel déploie automatiquement à chaque push sur la branche principale
- Les pull requests créent automatiquement des preview deployments

## Support

Pour plus d'aide, consultez la documentation Vercel.

