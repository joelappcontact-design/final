# 🎯 Configuration Google Ads - Serrurier d'Urgence

## 📋 Prérequis

- Compte Google Ads actif
- Site déployé et fonctionnel
- Google Analytics 4 configuré
- Budget minimum : 50€/jour recommandé

## 🔧 Configuration des Conversions

### 1. Créer une Conversion "Appels depuis le site"

1. **Aller dans Google Ads** → Outils → Conversions
2. **Créer une nouvelle conversion** :
   - Type : "Appels depuis le site web"
   - Nom : "Appel depuis le site"
   - Valeur : 50€ (valeur moyenne d'un appel)
   - Comptage : "Une seule"
   - Fenêtre d'attribution : 30 jours
   - Fenêtre de clic : 30 jours
   - Fenêtre de vue : 1 jour

3. **Récupérer les identifiants** :
   - ID de conversion : `AW-XXXXXXXXX`
   - Label de conversion : `XXXXXXXXX`

### 2. Configurer le Tracking

1. **Ajouter dans Vercel** (Variables d'environnement) :
   ```bash
   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX
   NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL=XXXXXXXXX
   ```

2. **Tester la conversion** :
   - Aller sur le site
   - Cliquer sur un bouton d'appel
   - Vérifier dans Google Ads → Conversions → Détails

## 🎯 Configuration des Campagnes

### 1. Campagne Search - Mots-clés Principaux

**Configuration de base** :
- Type : Recherche
- Objectif : Conversions
- Budget : 30€/jour
- Ciblage : France + 50km autour de Paris

**Mots-clés principaux** (Correspondance exacte) :
```
[serrurier paris]
[serrurier urgence paris]
[ouverture porte paris]
[changement cylindre paris]
[serrurier 24h paris]
[depannage serrure paris]
[serrurier pas cher paris]
[artisan serrurier paris]
```

**Mots-clés secondaires** (Correspondance large) :
```
serrurier paris
serrurier urgence
ouverture porte
changement cylindre
serrurier 24h
depannage serrure
serrurier pas cher
artisan serrurier
```

### 2. Campagne Search - Mots-clés Géographiques

**Mots-clés par arrondissement** :
```
[serrurier paris 1]
[serrurier paris 2]
[serrurier paris 3]
[serrurier paris 4]
[serrurier paris 5]
[serrurier paris 6]
[serrurier paris 7]
[serrurier paris 8]
[serrurier paris 9]
[serrurier paris 10]
[serrurier paris 11]
[serrurier paris 12]
[serrurier paris 13]
[serrurier paris 14]
[serrurier paris 15]
[serrurier paris 16]
[serrurier paris 17]
[serrurier paris 18]
[serrurier paris 19]
[serrurier paris 20]
```

**Mots-clés banlieue** :
```
[serrurier saint denis]
[serrurier bobigny]
[serrurier sarcelles]
[serrurier neuilly sur seine]
[serrurier boulogne billancourt]
[serrurier issy les moulineaux]
[serrurier clichy]
[serrurier levallois perret]
[serrurier asnieres sur seine]
[serrurier colombes]
```

### 3. Campagne Display - Remarketing

**Configuration** :
- Type : Display
- Objectif : Conversions
- Budget : 20€/jour
- Ciblage : Audiences de remarketing

**Audiences à créer** :
- Visiteurs du site (30 jours)
- Visiteurs de la page tarifs
- Visiteurs de la page contact
- Visiteurs de pages de villes

## 📝 Création des Annonces

### 1. Annonces Search - Format Standard

**Annonce 1** :
```
Titre 1 : Serrurier d'Urgence Paris 24h/24
Titre 2 : Prix Fixes & Transparents
Description : Intervention rapide en 30-45min. Artisans vérifiés. Pas de surprise, le prix affiché est le prix payé. Appelez maintenant !
```

**Annonce 2** :
```
Titre 1 : Ouverture de Porte Paris
Titre 2 : De 129€ TTC - Intervention Rapide
Description : Serrurier professionnel 24h/24. Prix fixes, artisans certifiés. Intervention en 30-45min. Appelez maintenant !
```

**Annonce 3** :
```
Titre 1 : Serrurier Pas Cher Paris
Titre 2 : Prix Fixes - Aucune Surprise
Description : Intervention d'urgence 24h/24. Prix transparents, artisans vérifiés. Facture automatique. Appelez maintenant !
```

### 2. Annonces Search - Format Responsive

**Annonce Responsive** :
```
Titres (3-15) :
- Serrurier d'Urgence Paris 24h/24
- Ouverture de Porte de 129€ TTC
- Serrurier Pas Cher - Prix Fixes
- Intervention Rapide 30-45min
- Artisans Vérifiés & Certifiés

Descriptions (2-4) :
- Intervention rapide en 30-45min. Prix fixes et transparents. Artisans vérifiés. Pas de surprise, le prix affiché est le prix payé.
- Serrurier professionnel 24h/24. Prix fixes, artisans certifiés. Facture automatique. Appelez maintenant !
- Intervention d'urgence 24h/24. Prix transparents, artisans vérifiés. Aucun supplément en fin d'intervention.
```

## 🔗 Extensions d'Annonces

### 1. Extension d'Appel

**Configuration** :
- Numéro : Votre numéro de téléphone
- Texte : "Appelez maintenant"
- Heures : 24h/24, 7j/7
- Pays : France

### 2. Extension de Site

**Pages à inclure** :
- Page d'accueil
- Page tarifs
- Page contact
- Pages de villes principales

### 3. Extension de Snippet

**Snippets** :
- "Prix fixes et transparents"
- "Intervention en 30-45min"
- "Artisans vérifiés et certifiés"
- "Disponible 24h/24, 7j/7"
- "Facture automatique"

### 4. Extension de Localisation

**Configuration** :
- Adresse : Votre adresse
- Téléphone : Votre numéro
- Heures : 24h/24, 7j/7
- Rayon : 50km

## 📊 Optimisation des Campagnes

### 1. Mots-clés à Exclure

**Exclusions négatives** :
```
gratuit
gratuite
gratuits
gratuites
formation
cours
apprentissage
stage
emploi
recrutement
```

### 2. Optimisation des Offres

**Stratégies d'enchères** :
- **Début** : CPC manuel (2-5€)
- **Optimisation** : CPC ciblé (valeur de conversion)
- **Avancé** : Enchères intelligentes

### 3. Segmentation par Performance

**Segments à analyser** :
- Heures de la journée
- Jours de la semaine
- Appareils (mobile/desktop)
- Géolocalisation
- Mots-clés

## 📈 Suivi et Optimisation

### 1. Métriques Clés

**À surveiller quotidiennement** :
- Coût par conversion (CPC)
- Taux de conversion
- Position moyenne
- CTR (Taux de clic)
- Qualité des mots-clés

### 2. Optimisations Hebdomadaires

**Actions à effectuer** :
- Ajouter de nouveaux mots-clés
- Pauser les mots-clés non performants
- Ajuster les enchères
- Créer de nouvelles annonces
- Analyser les audiences

### 3. Optimisations Mensuelles

**Actions à effectuer** :
- Analyser les performances par campagne
- Ajuster les budgets
- Créer de nouvelles extensions
- Optimiser les pages de destination
- Tester de nouveaux formats d'annonces

## 🎯 Landing Pages Optimisées

### 1. Pages de Destination par Mots-clés

**Mots-clés "serrurier [ville]"** :
- Rediriger vers `/zones/[ville]`
- Contenu personnalisé par ville
- Prix locaux
- Temps d'intervention local

**Mots-clés "ouverture porte"** :
- Rediriger vers `/tarifs`
- Focus sur les tarifs d'ouverture
- Témoignages clients
- Processus d'intervention

### 2. Optimisation des Pages

**Éléments clés** :
- CTA visible sans scroll
- Numéro de téléphone en gros
- Prix affichés clairement
- Témoignages clients
- Garanties et certifications

## 📱 Optimisation Mobile

### 1. Annonces Mobile

**Format adapté** :
- Titres courts et percutants
- Descriptions concises
- CTA clair et visible
- Numéro de téléphone cliquable

### 2. Pages Mobile

**Optimisations** :
- Bouton d'appel sticky
- Formulaire simplifié
- Navigation intuitive
- Chargement rapide

## 🔍 Tests A/B

### 1. Tests d'Annonces

**Variantes à tester** :
- Titres différents
- Descriptions différentes
- CTA différents
- Extensions différentes

### 2. Tests de Pages

**Variantes à tester** :
- Position des CTA
- Couleurs des boutons
- Texte des CTA
- Images et témoignages

## 📊 Reporting

### 1. Rapports Quotidiens

**Métriques à suivre** :
- Conversions du jour
- Coût par conversion
- Mots-clés performants
- Problèmes techniques

### 2. Rapports Hebdomadaires

**Analyses à effectuer** :
- Performance par campagne
- ROI par mot-clé
- Optimisations effectuées
- Objectifs atteints

### 3. Rapports Mensuels

**Bilans à faire** :
- Évolution des performances
- Analyse des tendances
- Planification des optimisations
- Ajustement des budgets

---

**🎯 Objectif** : Maximiser les conversions en appels téléphoniques tout en optimisant le coût par acquisition.
