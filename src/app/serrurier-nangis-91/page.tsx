import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nangis',
  department: '91',
  population: '9000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nangis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nangis-91', 'serrurier urgence nangis-91', 'ouverture porte nangis-91', 'serrurier 24h nangis-91', 'dépannage serrure nangis-91']
};

export default function Page() {
  return <CityPage 
    cityName="Nangis"
    citySlug="nangis-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nangis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nangis-91", "serrurier urgence nangis-91", "ouverture porte nangis-91", "serrurier 24h nangis-91", "dépannage serrure nangis-91"]}
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