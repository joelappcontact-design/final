import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Provins',
  department: '91',
  population: '12000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Provins 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier provins-91', 'serrurier urgence provins-91', 'ouverture porte provins-91', 'serrurier 24h provins-91', 'dépannage serrure provins-91']
};

export default function Page() {
  return <CityPage 
    cityName="Provins"
    citySlug="provins-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Provins - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier provins-91", "serrurier urgence provins-91", "ouverture porte provins-91", "serrurier 24h provins-91", "dépannage serrure provins-91"]}
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