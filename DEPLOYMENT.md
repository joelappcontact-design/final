# 🚀 Guide de Déploiement - Serrurier d'Urgence

## 📋 Prérequis

- Compte Vercel (gratuit)
- Compte Google Analytics 4
- Compte Google Ads (optionnel)
- Repository GitHub (recommandé)

## 🔧 Configuration Vercel

### 1. Connexion du Repository

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Cliquer sur "New Project"
4. Sélectionner le repository `serrurier-urgence`
5. Cliquer sur "Import"

### 2. Configuration des Variables d'Environnement

Dans le dashboard Vercel → Settings → Environment Variables :

```bash
# Configuration du site
NEXT_PUBLIC_SITE_NAME=Serrurier Joël
NEXT_PUBLIC_PHONE=+33 1 23 45 67 89
NEXT_PUBLIC_PRIMARY_CITY=Paris
NEXT_PUBLIC_SERVICE_HOURS=24/7
NEXT_PUBLIC_SLA_MINUTES=30–45 min

# USP
NEXT_PUBLIC_USP_1=Prix fixes et clairs
NEXT_PUBLIC_USP_2=Devis instantané par photo (bientôt)
NEXT_PUBLIC_USP_3=Intervention rapide par artisans vérifiés

# Villes
NEXT_PUBLIC_CITY_LIST=Paris 1,Paris 2,Paris 3,Paris 4,Paris 5,Paris 6,Paris 7,Paris 8,Paris 9,Paris 10,Paris 11,Paris 12,Paris 13,Paris 14,Paris 15,Paris 16,Paris 17,Paris 18,Paris 19,Paris 20,Saint-Denis,Bobigny,Sarcelles,Neuilly-sur-Seine,Boulogne-Billancourt,Issy-les-Moulineaux,Clichy,Levallois-Perret,Asnières-sur-Seine,Colombes

# Tracking
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL=XXXXXXXXX

# Légal
NEXT_PUBLIC_COMPANY_SIREN=123456789
NEXT_PUBLIC_COMPANY_EMAIL=contact@serrurier-joel.fr
NEXT_PUBLIC_COMPANY_ADDRESS=123 Rue de la Paix, 75001 Paris

# Tarifs (en centimes)
NEXT_PUBLIC_PRICE_SIMPLE_OPENING=12900
NEXT_PUBLIC_PRICE_COMPLEX_OPENING=18900
NEXT_PUBLIC_PRICE_CYLINDER_CHANGE=8900
NEXT_PUBLIC_PRICE_SECURE_DOOR=29900

# Options
NEXT_PUBLIC_TRAVEL_FEE_INCLUDED=true
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
```

### 3. Configuration du Domaine Personnalisé

1. Aller dans Settings → Domains
2. Ajouter votre domaine personnalisé
3. Configurer les DNS selon les instructions Vercel
4. Attendre la propagation (jusqu'à 24h)

## 📊 Configuration Google Analytics 4

### 1. Créer une Propriété GA4

1. Aller sur [analytics.google.com](https://analytics.google.com)
2. Créer une propriété
3. Nom : "Serrurier Joël"
4. URL : Votre domaine
5. Récupérer l'ID de mesure (G-XXXXXXXXXX)

### 2. Configurer les Conversions

1. Aller dans GA4 → Configurer → Événements
2. Créer un événement personnalisé "call_click"
3. Configurer les paramètres d'événement
4. Tester avec l'outil de débogage

### 3. Vérifier le Tracking

1. Aller sur votre site
2. Ouvrir les outils de développement
3. Vérifier que les événements sont envoyés
4. Utiliser l'extension "Google Analytics Debugger"

## 🎯 Configuration Google Ads

### 1. Créer une Conversion

1. Aller dans Google Ads → Outils → Conversions
2. Créer une nouvelle conversion
3. Type : "Appels depuis le site web"
4. Nom : "Appels depuis le site"
5. Récupérer l'ID de conversion et le label

### 2. Configurer le Tracking

1. Ajouter les IDs dans Vercel
2. Tester avec l'outil de test de conversion
3. Vérifier que les conversions remontent

### 3. Optimiser les Campagnes

1. Créer des campagnes Search
2. Utiliser les extensions d'appel
3. Configurer les audiences de remarketing
4. Optimiser les mots-clés

## 🔍 Vérification Post-Déploiement

### 1. Tests de Performance

```bash
# Lighthouse
npx lighthouse https://votre-domaine.com --view

# Core Web Vitals
npx web-vitals https://votre-domaine.com
```

### 2. Tests de Fonctionnalité

- [ ] Boutons d'appel fonctionnent
- [ ] Formulaire de contact envoie
- [ ] Pages de villes se chargent
- [ ] Tracking GA4 fonctionne
- [ ] Conversions Ads remontent
- [ ] Bannière cookies s'affiche
- [ ] Mobile responsive

### 3. Tests SEO

- [ ] Sitemap accessible : `/sitemap.xml`
- [ ] Robots.txt accessible : `/robots.txt`
- [ ] Schema.org valide (Rich Results Test)
- [ ] Meta tags présents
- [ ] Images optimisées

## 🚀 Optimisations Avancées

### 1. Performance

```bash
# Compression d'images
npm install sharp

# Optimisation des bundles
npm run build -- --analyze
```

### 2. SEO

```bash
# Vérification des liens
npx broken-link-checker https://votre-domaine.com

# Test de vitesse
npx speedtest https://votre-domaine.com
```

### 3. Sécurité

```bash
# Audit de sécurité
npm audit

# Headers de sécurité
# Vérifier dans vercel.json
```

## 📱 Configuration Mobile

### 1. PWA

- [ ] Manifest configuré
- [ ] Icônes présentes
- [ ] Service Worker (optionnel)

### 2. Appels Téléphoniques

- [ ] `tel:` links fonctionnent
- [ ] Tracking des appels
- [ ] Numéro visible partout

## 🔧 Maintenance

### 1. Mises à Jour

```bash
# Mise à jour des dépendances
npm update

# Vérification de sécurité
npm audit fix
```

### 2. Monitoring

- [ ] Uptime monitoring (UptimeRobot)
- [ ] Performance monitoring (Vercel Analytics)
- [ ] Error tracking (Sentry)

### 3. Sauvegardes

- [ ] Code sur GitHub
- [ ] Variables d'environnement sauvegardées
- [ ] Base de données (si applicable)

## 🆘 Dépannage

### Problèmes Courants

1. **Site ne se charge pas**
   - Vérifier les variables d'environnement
   - Vérifier les logs Vercel

2. **Tracking ne fonctionne pas**
   - Vérifier les IDs GA4/Ads
   - Vérifier la console du navigateur

3. **Pages de villes 404**
   - Vérifier la configuration des villes
   - Redéployer le site

4. **Performance faible**
   - Vérifier les images
   - Optimiser le CSS/JS

### Support

- **Documentation Vercel** : [vercel.com/docs](https://vercel.com/docs)
- **Documentation Next.js** : [nextjs.org/docs](https://nextjs.org/docs)
- **Support Google Analytics** : [support.google.com/analytics](https://support.google.com/analytics)

---

**✅ Déploiement réussi** : Votre site est maintenant en ligne et optimisé pour la conversion !
