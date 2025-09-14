import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boussy-Saint-Antoine',
  department: '91',
  population: '7000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boussy-Saint-Antoine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boussy-saint-antoine', 'serrurier urgence boussy-saint-antoine', 'ouverture porte boussy-saint-antoine', 'serrurier 24h boussy-saint-antoine', 'dépannage serrure boussy-saint-antoine']
};

export default function Page() {
  return <CityPage 
    cityName="Boussy-Saint-Antoine"
    citySlug="boussy-saint-antoine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boussy-Saint-Antoine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boussy-saint-antoine", "serrurier urgence boussy-saint-antoine", "ouverture porte boussy-saint-antoine", "serrurier 24h boussy-saint-antoine", "dépannage serrure boussy-saint-antoine"]}
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