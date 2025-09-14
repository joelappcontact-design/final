import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Hurepoix',
  department: '78',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Hurepoix 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier hurepoix', 'serrurier urgence hurepoix', 'ouverture porte hurepoix', 'serrurier 24h hurepoix', 'dépannage serrure hurepoix']
};

export default function Page() {
  return <CityPage 
    cityName="Hurepoix"
    citySlug="hurepoix"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Hurepoix - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier hurepoix", "serrurier urgence hurepoix", "ouverture porte hurepoix", "serrurier 24h hurepoix", "dépannage serrure hurepoix"]}
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