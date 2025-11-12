#!/bin/bash
# Script pour déployer automatiquement sur Vercel

echo "🚀 Déploiement automatique..."

# Ajouter tous les fichiers modifiés
git add .

# Commit avec message
git commit -m "Auto-deploy: $(date +'%Y-%m-%d %H:%M:%S')"

# Push vers GitHub (déclenche le déploiement automatique sur Vercel)
git push origin main

echo "✅ Code poussé vers GitHub. Vercel déploiera automatiquement..."

