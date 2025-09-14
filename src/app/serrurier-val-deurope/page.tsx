import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Val-d\'Europe',
  department: '77',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Val-d\'Europe 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier val-deurope', 'serrurier urgence val-deurope', 'ouverture porte val-deurope', 'serrurier 24h val-deurope', 'dépannage serrure val-deurope']
};

export default function Page() {
  return <CityPage 
    cityName="Val-d\'Europe"
    citySlug="val-deurope"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Val-d\'Europe - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier val-deurope", "serrurier urgence val-deurope", "ouverture porte val-deurope", "serrurier 24h val-deurope", "dépannage serrure val-deurope"]}
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