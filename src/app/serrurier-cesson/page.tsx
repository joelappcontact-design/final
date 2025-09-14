import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Cesson',
  department: '77',
  population: '8500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Cesson 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier cesson', 'serrurier urgence cesson', 'ouverture porte cesson', 'serrurier 24h cesson', 'dépannage serrure cesson']
};

export default function Page() {
  return <CityPage 
    cityName="Cesson"
    citySlug="cesson"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Cesson - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier cesson", "serrurier urgence cesson", "ouverture porte cesson", "serrurier 24h cesson", "dépannage serrure cesson"]}
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