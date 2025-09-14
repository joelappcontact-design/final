import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Valenton',
  department: '91',
  population: '13000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Valenton 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier valenton-91', 'serrurier urgence valenton-91', 'ouverture porte valenton-91', 'serrurier 24h valenton-91', 'dépannage serrure valenton-91']
};

export default function Page() {
  return <CityPage 
    cityName="Valenton"
    citySlug="valenton-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Valenton - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier valenton-91", "serrurier urgence valenton-91", "ouverture porte valenton-91", "serrurier 24h valenton-91", "dépannage serrure valenton-91"]}
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