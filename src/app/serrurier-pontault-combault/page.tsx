import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pontault-Combault',
  department: '93',
  population: '38000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pontault-Combault 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pontault-combault', 'serrurier urgence pontault-combault', 'ouverture porte pontault-combault', 'serrurier 24h pontault-combault', 'dépannage serrure pontault-combault']
};

export default function Page() {
  return <CityPage 
    cityName="Pontault-Combault"
    citySlug="pontault-combault"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pontault-Combault - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pontault-combault", "serrurier urgence pontault-combault", "ouverture porte pontault-combault", "serrurier 24h pontault-combault", "dépannage serrure pontault-combault"]}
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