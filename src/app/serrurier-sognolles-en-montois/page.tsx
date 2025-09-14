import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sognolles-en-Montois',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sognolles-en-Montois 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sognolles-en-montois', 'serrurier urgence sognolles-en-montois', 'ouverture porte sognolles-en-montois', 'serrurier 24h sognolles-en-montois', 'dépannage serrure sognolles-en-montois']
};

export default function Page() {
  return <CityPage 
    cityName="Sognolles-en-Montois"
    citySlug="sognolles-en-montois"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sognolles-en-Montois - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sognolles-en-montois", "serrurier urgence sognolles-en-montois", "ouverture porte sognolles-en-montois", "serrurier 24h sognolles-en-montois", "dépannage serrure sognolles-en-montois"]}
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