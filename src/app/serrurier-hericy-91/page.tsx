import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Héricy',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Héricy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier hericy-91', 'serrurier urgence hericy-91', 'ouverture porte hericy-91', 'serrurier 24h hericy-91', 'dépannage serrure hericy-91']
};

export default function Page() {
  return <CityPage 
    cityName="Héricy"
    citySlug="hericy-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Héricy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier hericy-91", "serrurier urgence hericy-91", "ouverture porte hericy-91", "serrurier 24h hericy-91", "dépannage serrure hericy-91"]}
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