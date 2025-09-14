import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sainte-Véronique',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sainte-Véronique 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sainte-veronique', 'serrurier urgence sainte-veronique', 'ouverture porte sainte-veronique', 'serrurier 24h sainte-veronique', 'dépannage serrure sainte-veronique']
};

export default function Page() {
  return <CityPage 
    cityName="Sainte-Véronique"
    citySlug="sainte-veronique"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sainte-Véronique - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sainte-veronique", "serrurier urgence sainte-veronique", "ouverture porte sainte-veronique", "serrurier 24h sainte-veronique", "dépannage serrure sainte-veronique"]}
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