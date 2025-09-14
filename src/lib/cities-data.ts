// Données des villes d'Île-de-France pour les pages serrurier
export interface CityData {
  name: string;
  slug: string;
  population: string;
  department: string;
  arrondissements?: string[];
  zones: string[];
  description: string;
  keywords: string[];
  priority: 'critique' | 'haute' | 'moyenne' | 'basse';
}

export const citiesData: Record<string, CityData> = {
  'paris': {
    name: 'Paris',
    slug: 'paris',
    population: '2,165,423',
    department: 'Paris',
    arrondissements: ["1er","2e","3e","4e","5e","6e","7e","8e","9e","10e","11e","12e","13e","14e","15e","16e","17e","18e","19e","20e"],
    zones: ["Centre-ville de Paris","Gare de Paris","Mairie de Paris","École de Paris"],
    description: 'Serrurier d\'urgence Paris 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier paris","serrurier urgence paris","ouverture porte paris","serrurier 24h paris","dépannage serrure paris"],
    priority: 'critique'
  },
  'boulogne-billancourt': {
    name: 'Boulogne-Billancourt',
    slug: 'boulogne-billancourt',
    population: '120,071',
    department: 'Hauts-de-Seine',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Boulogne-Billancourt","Gare de Boulogne-Billancourt","Mairie de Boulogne-Billancourt","École de Boulogne-Billancourt"],
    description: 'Serrurier d\'urgence Boulogne-Billancourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier boulogne-billancourt","serrurier urgence boulogne-billancourt","ouverture porte boulogne-billancourt","serrurier 24h boulogne-billancourt","dépannage serrure boulogne-billancourt"],
    priority: 'critique'
  },
  'saint-denis': {
    name: 'Saint-Denis',
    slug: 'saint-denis',
    population: '111,103',
    department: 'Seine-Saint-Denis',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Saint-Denis","Gare de Saint-Denis","Mairie de Saint-Denis","École de Saint-Denis"],
    description: 'Serrurier d\'urgence Saint-Denis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier saint-denis","serrurier urgence saint-denis","ouverture porte saint-denis","serrurier 24h saint-denis","dépannage serrure saint-denis"],
    priority: 'critique'
  },
  'creteil': {
    name: 'Créteil',
    slug: 'creteil',
    population: '92,265',
    department: 'Val-de-Marne',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Créteil","Gare de Créteil","Mairie de Créteil","École de Créteil"],
    description: 'Serrurier d\'urgence Créteil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier creteil","serrurier urgence creteil","ouverture porte creteil","serrurier 24h creteil","dépannage serrure creteil"],
    priority: 'critique'
  },
  'versailles': {
    name: 'Versailles',
    slug: 'versailles',
    population: '85,461',
    department: 'Yvelines',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Versailles","Gare de Versailles","Mairie de Versailles","École de Versailles"],
    description: 'Serrurier d\'urgence Versailles 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier versailles","serrurier urgence versailles","ouverture porte versailles","serrurier 24h versailles","dépannage serrure versailles"],
    priority: 'critique'
  },
  'nanterre': {
    name: 'Nanterre',
    slug: 'nanterre',
    population: '95,105',
    department: 'Hauts-de-Seine',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Nanterre","Gare de Nanterre","Mairie de Nanterre","École de Nanterre"],
    description: 'Serrurier d\'urgence Nanterre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier nanterre","serrurier urgence nanterre","ouverture porte nanterre","serrurier 24h nanterre","dépannage serrure nanterre"],
    priority: 'critique'
  },
  'issy-les-moulineaux': {
    name: 'Issy-les-Moulineaux',
    slug: 'issy-les-moulineaux',
    population: '66,981',
    department: 'Hauts-de-Seine',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Issy-les-Moulineaux","Gare de Issy-les-Moulineaux","Mairie de Issy-les-Moulineaux","École de Issy-les-Moulineaux"],
    description: 'Serrurier d\'urgence Issy-les-Moulineaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier issy-les-moulineaux","serrurier urgence issy-les-moulineaux","ouverture porte issy-les-moulineaux","serrurier 24h issy-les-moulineaux","dépannage serrure issy-les-moulineaux"],
    priority: 'critique'
  },
  'levallois-perret': {
    name: 'Levallois-Perret',
    slug: 'levallois-perret',
    population: '64,379',
    department: 'Hauts-de-Seine',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Levallois-Perret","Gare de Levallois-Perret","Mairie de Levallois-Perret","École de Levallois-Perret"],
    description: 'Serrurier d\'urgence Levallois-Perret 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier levallois-perret","serrurier urgence levallois-perret","ouverture porte levallois-perret","serrurier 24h levallois-perret","dépannage serrure levallois-perret"],
    priority: 'critique'
  },
  'villejuif': {
    name: 'Villejuif',
    slug: 'villejuif',
    population: '55,250',
    department: 'Val-de-Marne',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Villejuif","Gare de Villejuif","Mairie de Villejuif","École de Villejuif"],
    description: 'Serrurier d\'urgence Villejuif 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier villejuif","serrurier urgence villejuif","ouverture porte villejuif","serrurier 24h villejuif","dépannage serrure villejuif"],
    priority: 'critique'
  },
  'anthony': {
    name: 'Antony',
    slug: 'anthony',
    population: '63,232',
    department: 'Hauts-de-Seine',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Antony","Gare de Antony","Mairie de Antony","École de Antony"],
    description: 'Serrurier d\'urgence Antony 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier anthony","serrurier urgence anthony","ouverture porte anthony","serrurier 24h anthony","dépannage serrure anthony"],
    priority: 'critique'
  },
  'asnieres-sur-seine': {
    name: 'Asnières-sur-Seine',
    slug: 'asnieres-sur-seine',
    population: '28,000',
    department: 'Hauts-de-Seine',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Asnières-sur-Seine","Gare de Asnières-sur-Seine","Mairie de Asnières-sur-Seine","École de Asnières-sur-Seine"],
    description: 'Serrurier d\'urgence Asnières-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier asnieres-sur-seine","serrurier urgence asnieres-sur-seine","ouverture porte asnieres-sur-seine","serrurier 24h asnieres-sur-seine","dépannage serrure asnieres-sur-seine"],
    priority: 'haute'
  },
  'colombes': {
    name: 'Colombes',
    slug: 'colombes',
    population: '18,000',
    department: 'Hauts-de-Seine',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Colombes","Gare de Colombes","Mairie de Colombes","École de Colombes"],
    description: 'Serrurier d\'urgence Colombes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier colombes","serrurier urgence colombes","ouverture porte colombes","serrurier 24h colombes","dépannage serrure colombes"],
    priority: 'haute'
  },
  'courbevoie': {
    name: 'Courbevoie',
    slug: 'courbevoie',
    population: '20,000',
    department: 'Hauts-de-Seine',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Courbevoie","Gare de Courbevoie","Mairie de Courbevoie","École de Courbevoie"],
    description: 'Serrurier d\'urgence Courbevoie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier courbevoie","serrurier urgence courbevoie","ouverture porte courbevoie","serrurier 24h courbevoie","dépannage serrure courbevoie"],
    priority: 'haute'
  },
  'neuilly-sur-seine': {
    name: 'Neuilly-sur-Seine',
    slug: 'neuilly-sur-seine',
    population: '27,000',
    department: 'Hauts-de-Seine',
    arrondissements: ["Centre","Nord","Sud","Est","Ouest"],
    zones: ["Centre-ville de Neuilly-sur-Seine","Gare de Neuilly-sur-Seine","Mairie de Neuilly-sur-Seine","École de Neuilly-sur-Seine"],
    description: 'Serrurier d\'urgence Neuilly-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
    keywords: ["serrurier neuilly-sur-seine","serrurier urgence neuilly-sur-seine","ouverture porte neuilly-sur-seine","serrurier 24h neuilly-sur-seine","dépannage serrure neuilly-sur-seine"],
    priority: 'haute'
  }
};

// Fonction pour obtenir les villes par priorité
export function getCitiesByPriority(priority: CityData['priority']): CityData[] {
  return Object.values(citiesData).filter(city => city.priority === priority);
}

// Fonction pour obtenir toutes les villes
export function getAllCities(): CityData[] {
  return Object.values(citiesData);
}

// Fonction pour obtenir une ville par slug
export function getCityBySlug(slug: string): CityData | undefined {
  return citiesData[slug];
}

// Statistiques
export const citiesStats = {
  total: Object.keys(citiesData).length,
  byPriority: {
    critique: getCitiesByPriority('critique').length,
    haute: getCitiesByPriority('haute').length,
    moyenne: getCitiesByPriority('moyenne').length,
    basse: getCitiesByPriority('basse').length,
  }
};