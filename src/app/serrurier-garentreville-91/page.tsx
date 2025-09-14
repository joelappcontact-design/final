import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Garentreville',
  department: '91',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Garentreville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier garentreville-91', 'serrurier urgence garentreville-91', 'ouverture porte garentreville-91', 'serrurier 24h garentreville-91', 'dépannage serrure garentreville-91']
};

export default function Page() {
  return <CityPage 
    cityName="Garentreville"
    citySlug="garentreville-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Garentreville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier garentreville-91", "serrurier urgence garentreville-91", "ouverture porte garentreville-91", "serrurier 24h garentreville-91", "dépannage serrure garentreville-91"]}
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