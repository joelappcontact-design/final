import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Maurice-Montcouronne',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Maurice-Montcouronne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-maurice-montcouronne', 'serrurier urgence saint-maurice-montcouronne', 'ouverture porte saint-maurice-montcouronne', 'serrurier 24h saint-maurice-montcouronne', 'dépannage serrure saint-maurice-montcouronne']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Maurice-Montcouronne"
    citySlug="saint-maurice-montcouronne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Maurice-Montcouronne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-maurice-montcouronne", "serrurier urgence saint-maurice-montcouronne", "ouverture porte saint-maurice-montcouronne", "serrurier 24h saint-maurice-montcouronne", "dépannage serrure saint-maurice-montcouronne"]}
  />;
}

export async function generateMetadata() {
  return {
    title: `Serrurier d'urgence ${cityData.name} 24h/24 - Intervention rapide`,
    description: cityData.description,
    keywords: cityData.keywords.join(', '),
    openGraph: {
      title: `Serrurier d'urgence ${cityData.name} 24h/24`,
      description: cityData.description,
      type: 'website',
      locale: 'fr_FR',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}