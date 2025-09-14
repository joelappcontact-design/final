import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Épinay-sous-Sénart',
  department: '91',
  population: '13000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Épinay-sous-Sénart 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier epinay-sous-senart', 'serrurier urgence epinay-sous-senart', 'ouverture porte epinay-sous-senart', 'serrurier 24h epinay-sous-senart', 'dépannage serrure epinay-sous-senart']
};

export default function Page() {
  return <CityPage 
    cityName="Épinay-sous-Sénart"
    citySlug="epinay-sous-senart"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Épinay-sous-Sénart - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier epinay-sous-senart", "serrurier urgence epinay-sous-senart", "ouverture porte epinay-sous-senart", "serrurier 24h epinay-sous-senart", "dépannage serrure epinay-sous-senart"]}
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