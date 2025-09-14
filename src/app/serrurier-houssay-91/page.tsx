import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Houssay',
  department: '91',
  population: '300',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Houssay 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier houssay-91', 'serrurier urgence houssay-91', 'ouverture porte houssay-91', 'serrurier 24h houssay-91', 'dépannage serrure houssay-91']
};

export default function Page() {
  return <CityPage 
    cityName="Houssay"
    citySlug="houssay-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Houssay - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier houssay-91", "serrurier urgence houssay-91", "ouverture porte houssay-91", "serrurier 24h houssay-91", "dépannage serrure houssay-91"]}
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