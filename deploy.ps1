# Script PowerShell pour déployer automatiquement sur Vercel

Write-Host "🚀 Déploiement automatique..." -ForegroundColor Green

# Ajouter tous les fichiers modifiés
git add .

# Commit avec message
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Auto-deploy: $timestamp"

# Push vers GitHub (déclenche le déploiement automatique sur Vercel)
git push origin main

Write-Host "✅ Code poussé vers GitHub. Vercel déploiera automatiquement..." -ForegroundColor Green

