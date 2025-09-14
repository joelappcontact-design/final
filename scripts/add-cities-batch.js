#!/usr/bin/env node

/**
 * Script pour ajouter des lots de villes par département
 * Usage: node scripts/add-cities-batch.js --department "Hauts-de-Seine" --count 20
 */

const fs = require('fs');
const path = require('path');

// Données des communes par département (exemples)
const citiesByDepartment = {
  'Hauts-de-Seine': [
    'Asnières-sur-Seine', 'Bagneux', 'Bois-Colombes', 'Boulogne-Billancourt', 'Bourg-la-Reine',
    'Châtenay-Malabry', 'Châtillon', 'Chaville', 'Clamart', 'Clichy', 'Colombes', 'Courbevoie',
    'Fontenay-aux-Roses', 'Garches', 'Gennevilliers', 'Issy-les-Moulineaux', 'La Garenne-Colombes',
    'Le Plessis-Robinson', 'Levallois-Perret', 'Malakoff', 'Marnes-la-Coquette', 'Meudon',
    'Montrouge', 'Nanterre', 'Neuilly-sur-Seine', 'Puteaux', 'Rueil-Malmaison', 'Saint-Cloud',
    'Sceaux', 'Sèvres', 'Suresnes', 'Vanves', 'Vaucresson', 'Ville-d\'Avray', 'Villeneuve-la-Garenne'
  ],
  'Seine-Saint-Denis': [
    'Aubervilliers', 'Aulnay-sous-Bois', 'Bagnolet', 'Bobigny', 'Bondy', 'Clichy-sous-Bois',
    'Coubron', 'Drancy', 'Épinay-sur-Seine', 'Gagny', 'Gournay-sur-Marne', 'L\'Île-Saint-Denis',
    'Les Lilas', 'Livry-Gargan', 'Montfermeil', 'Montreuil', 'Neuilly-Plaisance', 'Neuilly-sur-Marne',
    'Noisy-le-Grand', 'Noisy-le-Sec', 'Pantin', 'Pierrefitte-sur-Seine', 'Le Pré-Saint-Gervais',
    'Romainville', 'Rosny-sous-Bois', 'Saint-Denis', 'Saint-Ouen', 'Sevran', 'Stains', 'Tremblay-en-France',
    'Vaujours', 'Villemomble', 'Villepinte', 'Villetaneuse'
  ],
  'Val-de-Marne': [
    'Alfortville', 'Arcueil', 'Boissy-Saint-Léger', 'Bonnes-sur-Marne', 'Bry-sur-Marne',
    'Cachan', 'Champigny-sur-Marne', 'Charenton-le-Pont', 'Chennevières-sur-Marne',
    'Chevilly-Larue', 'Choisy-le-Roi', 'Créteil', 'Fontenay-sous-Bois', 'Fresnes',
    'Gentilly', 'L\'Haÿ-les-Roses', 'Ivry-sur-Seine', 'Joinville-le-Pont', 'Le Kremlin-Bicêtre',
    'Limeil-Brévannes', 'Maisons-Alfort', 'Mandres-les-Roses', 'Marolles-en-Brie',
    'Nogent-sur-Marne', 'Noiseau', 'Orly', 'Ormesson-sur-Marne', 'Périgny', 'Le Perreux-sur-Marne',
    'Plateau briard', 'Plessis-Trévise', 'Rungis', 'Saint-Mandé', 'Saint-Maur-des-Fossés',
    'Saint-Maurice', 'Santeny', 'Sucy-en-Brie', 'Thiais', 'Valenton', 'Villecresnes',
    'Villeneuve-le-Roi', 'Villeneuve-Saint-Georges', 'Villiers-sur-Marne', 'Vincennes', 'Vitry-sur-Seine'
  ],
  'Yvelines': [
    'Achères', 'Andrésy', 'Bailly', 'Bazemont', 'Bennecourt', 'Beynes', 'Bouafle', 'Bougival',
    'Bourdonné', 'Bréval', 'Buc', 'Buchelay', 'Carrières-sous-Poissy', 'Carrières-sur-Seine',
    'Chambourcy', 'Chanteloup-les-Vignes', 'Chapet', 'Châteaufort', 'Chaudon', 'Chavenay',
    'Chevreuse', 'Choisel', 'Civry-la-Forêt', 'Coignières', 'Condé-sur-Vesgre', 'Conflans-Sainte-Honorine',
    'Courgent', 'Crespières', 'Croissy-sur-Seine', 'Dammartin-en-Serve', 'Dampierre-en-Yvelines',
    'Davron', 'Drocourt', 'Ecquevilly', 'Élancourt', 'Émancé', 'Épône', 'Les Essarts-le-Roi',
    'Étang-la-Ville', 'Évecquemont', 'La Falaise', 'Favrieux', 'Feucherolles', 'Flacourt',
    'Flexanville', 'Flins-Neuve-Église', 'Flins-sur-Seine', 'Follainville-Dennemont', 'Fontenay-Mauvoisin',
    'Fontenay-Saint-Père', 'Freneuse', 'Gaillon-sur-Montcient', 'Galluis', 'Gambais', 'Gambaiseuil',
    'Garancières', 'Gargenville', 'Gazeran', 'Gommecourt', 'Goupillières', 'Goussonville', 'Grandchamp',
    'Gressey', 'Grosrouvre', 'Guernes', 'Guerville', 'Guitrancourt', 'Guyancourt', 'Hardricourt',
    'Hargeville', 'La Hauteville', 'Herbeville', 'Hermeray', 'Houdan', 'Houilles', 'Issou',
    'Jambville', 'Jouars-Pontchartrain', 'Jouy-en-Josas', 'Jouy-Mauvoisin', 'Jumeauville', 'Juziers',
    'Lainville-en-Vexin', 'Lévis-Saint-Nom', 'Limay', 'Limetz-Villez', 'Les Loges-en-Josas',
    'Lommoye', 'Longnes', 'Longvilliers', 'Louveciennes', 'Magnanville', 'Magny-les-Hameaux',
    'Maisons-Laffitte', 'Mantes-la-Jolie', 'Mantes-la-Ville', 'Marcq', 'Mareil-le-Guyon',
    'Mareil-Marly', 'Mareil-sur-Mauldre', 'Marly-le-Roi', 'Maule', 'Maulette', 'Maurecourt',
    'Maurepas', 'Médan', 'Ménerville', 'Méré', 'Méricourt', 'Méry-sur-Oise', 'Mézières-sur-Seine',
    'Mézy-sur-Seine', 'Millemont', 'Milon-la-Chapelle', 'Mittainville', 'Moisson', 'Mondreville',
    'Montainville', 'Montalet-le-Bois', 'Montchauvet', 'Montesson', 'Montigny-le-Bretonneux',
    'Morangis', 'Mousseaux-sur-Seine', 'Mulcent', 'Les Mureaux', 'Neauphle-le-Château',
    'Neauphle-le-Vieux', 'Neauphlette', 'Nézel', 'Noisy-le-Roi', 'Oinville-sur-Montcient',
    'Orgerus', 'Orgeval', 'Orphin', 'Orsonville', 'Orvilliers', 'Osmoy', 'Paray-Douaville',
    'Le Pecq', 'Perdreauville', 'Le Perray-en-Yvelines', 'Plaisir', 'Poigny-la-Forêt',
    'Poissy', 'Ponthévrard', 'Porcheville', 'Le Port-Marly', 'Port-Villez', 'Prunay-le-Temple',
    'Prunay-en-Yvelines', 'Puteaux', 'Raizeux', 'Rambouillet', 'Rennemoulin', 'Richebourg',
    'Rochefort-en-Yvelines', 'Rocquencourt', 'Rolleboise', 'Rosay', 'Rosny-sur-Seine',
    'Sailly', 'Saint-Arnoult-en-Yvelines', 'Saint-Cyr-l\'École', 'Saint-Forget', 'Saint-Germain-de-la-Grange',
    'Saint-Germain-en-Laye', 'Saint-Hilarion', 'Saint-Illiers-la-Ville', 'Saint-Illiers-le-Bois',
    'Saint-Lambert', 'Saint-Léger-en-Yvelines', 'Saint-Martin-de-Bréthencourt', 'Saint-Martin-des-Champs',
    'Saint-Martin-la-Garenne', 'Saint-Nom-la-Bretèche', 'Saint-Rémy-lès-Chevreuse', 'Sainte-Mesme',
    'Saint-Rémy-l\'Honoré', 'Sartrouville', 'Saulx-Marchais', 'Senlisse', 'Septeuil', 'Soindres',
    'Sonchamp', 'Tacoignières', 'Le Tartre-Gaudran', 'Le Tertre-Saint-Denis', 'Tessancourt-sur-Aubette',
    'Thiverval-Grignon', 'Thoiry', 'Toussus-le-Noble', 'Trappes', 'Le Tremblay-sur-Mauldre',
    'Triel-sur-Seine', 'Vaux-sur-Seine', 'Vélizy-Villacoublay', 'Verneuil-sur-Seine', 'Vernouillet',
    'Versailles', 'Vert', 'Vicq', 'Vieille-Église-en-Yvelines', 'La Villeneuve-en-Chevrie',
    'Villennes-sur-Seine', 'Villepreux', 'Villette', 'Villiers-le-Mahieu', 'Villiers-Saint-Frédéric',
    'Viroflay', 'Voisins-le-Bretonneux'
  ]
};

// Parse des arguments
const args = process.argv.slice(2);
const departmentArg = args.find(arg => arg.startsWith('--department='));
const countArg = args.find(arg => arg.startsWith('--count='));

if (!departmentArg) {
  console.error('❌ Erreur: --department est requis');
  console.log('Usage: node scripts/add-cities-batch.js --department "Hauts-de-Seine" --count 20');
  console.log('Départements disponibles:', Object.keys(citiesByDepartment).join(', '));
  process.exit(1);
}

const department = departmentArg.split('=')[1];
const count = countArg ? parseInt(countArg.split('=')[1]) : 20;

if (!citiesByDepartment[department]) {
  console.error(`❌ Erreur: Département "${department}" non trouvé`);
  console.log('Départements disponibles:', Object.keys(citiesByDepartment).join(', '));
  process.exit(1);
}

const availableCities = citiesByDepartment[department];
const citiesToAdd = availableCities.slice(0, count);

console.log(`🚀 Ajout de ${citiesToAdd.length} villes du département ${department}...`);

// Exécution du script add-cities.js
const { spawn } = require('child_process');
const citiesString = citiesToAdd.join(',');
const priority = 'moyenne'; // Priorité par défaut pour les lots

const child = spawn('node', [
  'scripts/add-cities.js',
  `--cities=${citiesString}`,
  `--priority=${priority}`
], { stdio: 'inherit' });

child.on('close', (code) => {
  if (code === 0) {
    console.log(`🎉 ${citiesToAdd.length} villes du département ${department} ajoutées avec succès !`);
    console.log(`📊 Prochaine étape : Continuer avec d'autres départements ou villes`);
  } else {
    console.error(`❌ Erreur lors de l'ajout des villes (code: ${code})`);
  }
});
