import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boissise-le-Roi',
  department: '77',
  population: '3500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boissise-le-Roi 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boissise-le-roi', 'serrurier urgence boissise-le-roi', 'ouverture porte boissise-le-roi', 'serrurier 24h boissise-le-roi', 'dépannage serrure boissise-le-roi']
};

export default function Page() {
  return <CityPage 
    cityName="Boissise-le-Roi"
    citySlug="boissise-le-roi"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boissise-le-Roi - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boissise-le-roi", "serrurier urgence boissise-le-roi", "ouverture porte boissise-le-roi", "serrurier 24h boissise-le-roi", "dépannage serrure boissise-le-roi"]}
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