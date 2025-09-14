import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chauconin-Neufmontiers',
  department: '77',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chauconin-Neufmontiers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chauconin-neufmontiers', 'serrurier urgence chauconin-neufmontiers', 'ouverture porte chauconin-neufmontiers', 'serrurier 24h chauconin-neufmontiers', 'dépannage serrure chauconin-neufmontiers']
};

export default function Page() {
  return <CityPage 
    cityName="Chauconin-Neufmontiers"
    citySlug="chauconin-neufmontiers"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chauconin-Neufmontiers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chauconin-neufmontiers", "serrurier urgence chauconin-neufmontiers", "ouverture porte chauconin-neufmontiers", "serrurier 24h chauconin-neufmontiers", "dépannage serrure chauconin-neufmontiers"]}
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