import CityPage from '@/components/CityPage';

const cityData = {
  name: 'May-en-Multien',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence May-en-Multien 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier may-en-multien-91', 'serrurier urgence may-en-multien-91', 'ouverture porte may-en-multien-91', 'serrurier 24h may-en-multien-91', 'dépannage serrure may-en-multien-91']
};

export default function Page() {
  return <CityPage 
    cityName="May-en-Multien"
    citySlug="may-en-multien-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="May-en-Multien - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier may-en-multien-91", "serrurier urgence may-en-multien-91", "ouverture porte may-en-multien-91", "serrurier 24h may-en-multien-91", "dépannage serrure may-en-multien-91"]}
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