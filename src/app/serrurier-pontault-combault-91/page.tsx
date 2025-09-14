import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pontault-Combault',
  department: '91',
  population: '38000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pontault-Combault 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pontault-combault-91', 'serrurier urgence pontault-combault-91', 'ouverture porte pontault-combault-91', 'serrurier 24h pontault-combault-91', 'dépannage serrure pontault-combault-91']
};

export default function Page() {
  return <CityPage 
    cityName="Pontault-Combault"
    citySlug="pontault-combault-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pontault-Combault - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pontault-combault-91", "serrurier urgence pontault-combault-91", "ouverture porte pontault-combault-91", "serrurier 24h pontault-combault-91", "dépannage serrure pontault-combault-91"]}
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