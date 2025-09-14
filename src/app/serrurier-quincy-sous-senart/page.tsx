import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Quincy-sous-Sénart',
  department: '91',
  population: '29000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Quincy-sous-Sénart 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier quincy-sous-senart', 'serrurier urgence quincy-sous-senart', 'ouverture porte quincy-sous-senart', 'serrurier 24h quincy-sous-senart', 'dépannage serrure quincy-sous-senart']
};

export default function Page() {
  return <CityPage 
    cityName="Quincy-sous-Sénart"
    citySlug="quincy-sous-senart"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Quincy-sous-Sénart - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier quincy-sous-senart", "serrurier urgence quincy-sous-senart", "ouverture porte quincy-sous-senart", "serrurier 24h quincy-sous-senart", "dépannage serrure quincy-sous-senart"]}
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