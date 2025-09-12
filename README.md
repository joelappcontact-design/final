# 🔐 Serrurier d'Urgence - Site Vitrine Optimisé

Site vitrine de serrurerie d'urgence 100% optimisé pour la conversion en appels téléphoniques depuis Google Ads.

## 🎯 Objectifs

- **Conversion maximale** : Taux de conversion en appels optimal (mobile & desktop)
- **Performance** : Lighthouse ≥ 95 mobile (Performance, SEO, Best Practices, Accessibility ≥ 90)
- **Conformité** : Google Ads + Consent Mode v2 + RGPD
- **Design moderne** : Interface intuitive, trust & clarté

## 🚀 Stack Technique

- **Framework** : Next.js 14 (App Router) + TypeScript
- **Styling** : Tailwind CSS avec design system personnalisé
- **Déploiement** : Vercel
- **Tracking** : GA4 + Google Ads Conversion Tracking + Consent Mode v2
- **SEO** : Schema.org (LocalBusiness, FAQPage) + Sitemap + Robots.txt
- **Accessibilité** : Conformité AA + Touch targets ≥ 44px

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js 14 (App Router)
│   ├── (pages)/           # Pages principales
│   ├── zones/[ville]/     # Pages dynamiques des villes
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Styles globaux
│   ├── sitemap.ts         # Génération sitemap
│   ├── robots.ts          # Configuration robots.txt
│   └── manifest.ts        # PWA manifest
├── components/            # Composants réutilisables
│   ├── CallCTA.tsx        # Boutons d'appel optimisés
│   ├── PriceCard.tsx      # Cartes de tarifs
│   ├── CityGrid.tsx       # Grille des villes
│   ├── FAQ.tsx            # Accordéon FAQ
│   ├── CookieBanner.tsx   # Bannière RGPD
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Pied de page
│   └── Schema*.tsx        # Composants Schema.org
├── lib/                   # Utilitaires et configuration
│   ├── config.ts          # Configuration centralisée
│   └── tracking.ts        # Gestion tracking GA4/Ads
└── types/                 # Types TypeScript
    └── index.ts           # Définitions de types
```

## ⚙️ Configuration

### Variables d'environnement

Copiez `env.example` vers `.env.local` et configurez :

```bash
# Configuration du site
NEXT_PUBLIC_SITE_NAME="Serrurier Joël"
NEXT_PUBLIC_PHONE="+33 1 23 45 67 89"
NEXT_PUBLIC_PRIMARY_CITY="Paris"
NEXT_PUBLIC_SERVICE_HOURS="24/7"
NEXT_PUBLIC_SLA_MINUTES="30–45 min"

# USP (Unique Selling Propositions)
NEXT_PUBLIC_USP_1="Prix fixes et clairs"
NEXT_PUBLIC_USP_2="Devis instantané par photo (bientôt)"
NEXT_PUBLIC_USP_3="Intervention rapide par artisans vérifiés"

# Liste des villes (séparées par des virgules)
NEXT_PUBLIC_CITY_LIST="Paris 1,Paris 2,Paris 3,Saint-Denis,Bobigny,Sarcelles"

# Tracking
NEXT_PUBLIC_GA4_MEASUREMENT_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID="AW-XXXXXXXXX"
NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL="XXXXXXXXX"

# Informations légales
NEXT_PUBLIC_COMPANY_SIREN="123456789"
NEXT_PUBLIC_COMPANY_EMAIL="contact@serrurier-joel.fr"
NEXT_PUBLIC_COMPANY_ADDRESS="123 Rue de la Paix, 75001 Paris"

# Tarifs (en centimes d'euros)
NEXT_PUBLIC_PRICE_SIMPLE_OPENING="12900"
NEXT_PUBLIC_PRICE_COMPLEX_OPENING="18900"
NEXT_PUBLIC_PRICE_CYLINDER_CHANGE="8900"
NEXT_PUBLIC_PRICE_SECURE_DOOR="29900"

# Frais de déplacement
NEXT_PUBLIC_TRAVEL_FEE_INCLUDED="true"
```

### Personnalisation du Branding

Modifiez les couleurs dans `tailwind.config.js` :

```javascript
colors: {
  purple: {
    800: '#6B4EFF',  // Violet principal
  },
  primary: {
    500: '#0EA5E9',  // Bleu principal
  },
  yellow: {
    400: '#FFD54A',  // Accent jaune
  }
}
```

## 🚀 Installation et Déploiement

### Installation locale

```bash
# Cloner le projet
git clone <repository-url>
cd serrurier-urgence

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp env.example .env.local
# Éditer .env.local avec vos valeurs

# Lancer en développement
npm run dev
```

### Déploiement Vercel

1. **Connecter le repository** :
   - Aller sur [vercel.com](https://vercel.com)
   - Importer le projet depuis GitHub

2. **Configurer les variables d'environnement** :
   - Dans le dashboard Vercel
   - Settings → Environment Variables
   - Ajouter toutes les variables de `.env.local`

3. **Déployer** :
   - Vercel déploie automatiquement à chaque push
   - Ou cliquer sur "Deploy" dans le dashboard

### Configuration Google Ads

1. **Créer une conversion** :
   - Google Ads → Outils → Conversions
   - "Appels depuis le site web"
   - Récupérer l'ID de conversion et le label

2. **Configurer le tracking** :
   - Ajouter les IDs dans `.env.local`
   - Les événements sont automatiquement trackés

### Configuration GA4

1. **Créer une propriété GA4** :
   - Google Analytics → Créer une propriété
   - Récupérer l'ID de mesure (G-XXXXXXXXXX)

2. **Configurer le tracking** :
   - Ajouter l'ID dans `.env.local`
   - Le tracking est automatiquement initialisé

## 📱 Pages Disponibles

- **/** : Landing principale avec hero, tarifs, zones, FAQ
- **/tarifs** : Page détaillée des tarifs
- **/contact** : Formulaire de contact + coordonnées
- **/faq** : Questions fréquentes avec Schema.org
- **/zones** : Liste de toutes les zones d'intervention
- **/zones/[ville]** : Pages dynamiques pour chaque ville
- **/mentions-legales** : Mentions légales RGPD
- **/confidentialite** : Politique de confidentialité

## 🎨 Design System

### Palette de couleurs
- **Violet principal** : `#6B4EFF` (dégradé de base)
- **Bleu principal** : `#0EA5E9` (dégradé de base)
- **Accent jaune** : `#FFD54A` (CTA, éléments clés)
- **Glassmorphism** : `bg-white/10 backdrop-blur-sm`

### Composants clés
- **CallCTA** : Boutons d'appel optimisés (sticky mobile)
- **PriceCard** : Cartes de tarifs avec glassmorphism
- **CityGrid** : Grille des villes cliquables
- **FAQ** : Accordéon avec Schema.org
- **CookieBanner** : Bannière RGPD avec Consent Mode v2

## 🔧 Fonctionnalités Techniques

### Conversion First
- **Sticky CTA** : Bouton d'appel toujours visible
- **Click-to-Call** : Tracking des clics sur `tel:`
- **Number swap** : Numéro dynamique si GCLID présent
- **Trust indicators** : Prix fixes, artisans vérifiés

### SEO & Performance
- **Schema.org** : LocalBusiness + FAQPage
- **Sitemap** : Génération automatique
- **Robots.txt** : Optimisé pour le référencement
- **Images optimisées** : Next.js Image avec lazy loading
- **Fonts système** : Performance maximale

### Accessibilité
- **Contrastes AA** : Conformité WCAG 2.1
- **Touch targets** : Minimum 44px
- **Focus states** : Navigation clavier
- **Aria-labels** : Lecteurs d'écran

### RGPD & Légal
- **Consent Mode v2** : Gestion des cookies
- **Cookie banner** : Interface de consentement
- **Pages légales** : Mentions + Confidentialité
- **Honeypot** : Protection anti-spam

## 📊 Tracking et Analytics

### Événements trackés
- **call_click** : Clic sur bouton d'appel
- **whatsapp_click** : Clic sur WhatsApp
- **city_page_view** : Visite page ville
- **form_submit** : Soumission formulaire

### Conversions Google Ads
- **Appels depuis le site** : Tracking automatique
- **GCLID capture** : Sauvegarde pour attribution
- **Consent Mode** : Respect des préférences utilisateur

## 🚀 Optimisations Performance

### Lighthouse Score ≥ 95
- **Images** : Next.js Image avec optimisation
- **Fonts** : Système fonts + preload
- **CSS** : Tailwind purgé + critical CSS
- **JS** : Code splitting + lazy loading
- **Caching** : Headers optimisés

### Core Web Vitals
- **LCP** : < 2.5s (images optimisées)
- **FID** : < 100ms (interactions rapides)
- **CLS** : < 0.1 (layout stable)

## 🔧 Maintenance

### Mise à jour des tarifs
1. Modifier les variables dans `.env.local`
2. Redéployer sur Vercel
3. Les changements sont instantanés

### Ajout de nouvelles villes
1. Ajouter à `NEXT_PUBLIC_CITY_LIST`
2. Les pages se génèrent automatiquement
3. Sitemap mis à jour automatiquement

### Modification du contenu
1. Éditer les composants dans `src/components/`
2. Les changements se propagent partout
3. Configuration centralisée dans `src/lib/config.ts`

## 📞 Support

Pour toute question ou personnalisation :
- **Email** : contact@serrurier-joel.fr
- **Téléphone** : +33 1 23 45 67 89

## 📄 Licence

Projet développé pour Serrurier Joël. Tous droits réservés.

---

**🎯 Objectif atteint** : Site 100% optimisé pour la conversion en appels téléphoniques depuis Google Ads, avec performance maximale et conformité RGPD.
