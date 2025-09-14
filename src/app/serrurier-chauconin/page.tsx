import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chauconin',
  department: '77',
  population: '1500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chauconin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chauconin', 'serrurier urgence chauconin', 'ouverture porte chauconin', 'serrurier 24h chauconin', 'dépannage serrure chauconin']
};

export default function Page() {
  return <CityPage 
    cityName="Chauconin"
    citySlug="chauconin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chauconin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chauconin", "serrurier urgence chauconin", "ouverture porte chauconin", "serrurier 24h chauconin", "dépannage serrure chauconin"]}
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