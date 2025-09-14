import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Garentreville',
  department: '77',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Garentreville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier garentreville', 'serrurier urgence garentreville', 'ouverture porte garentreville', 'serrurier 24h garentreville', 'dépannage serrure garentreville']
};

export default function Page() {
  return <CityPage 
    cityName="Garentreville"
    citySlug="garentreville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Garentreville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier garentreville", "serrurier urgence garentreville", "ouverture porte garentreville", "serrurier 24h garentreville", "dépannage serrure garentreville"]}
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