import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rozay-en-Brie',
  department: '91',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rozay-en-Brie 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rozay-en-brie-91', 'serrurier urgence rozay-en-brie-91', 'ouverture porte rozay-en-brie-91', 'serrurier 24h rozay-en-brie-91', 'dépannage serrure rozay-en-brie-91']
};

export default function Page() {
  return <CityPage 
    cityName="Rozay-en-Brie"
    citySlug="rozay-en-brie-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rozay-en-Brie - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rozay-en-brie-91", "serrurier urgence rozay-en-brie-91", "ouverture porte rozay-en-brie-91", "serrurier 24h rozay-en-brie-91", "dépannage serrure rozay-en-brie-91"]}
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