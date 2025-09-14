import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boussy-Saint-Antoine-Centre',
  department: '91',
  population: '7000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boussy-Saint-Antoine-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boussy-saint-antoine-centre', 'serrurier urgence boussy-saint-antoine-centre', 'ouverture porte boussy-saint-antoine-centre', 'serrurier 24h boussy-saint-antoine-centre', 'dépannage serrure boussy-saint-antoine-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Boussy-Saint-Antoine-Centre"
    citySlug="boussy-saint-antoine-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boussy-Saint-Antoine-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boussy-saint-antoine-centre", "serrurier urgence boussy-saint-antoine-centre", "ouverture porte boussy-saint-antoine-centre", "serrurier 24h boussy-saint-antoine-centre", "dépannage serrure boussy-saint-antoine-centre"]}
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