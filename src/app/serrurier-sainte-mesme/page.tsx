import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sainte-Mesme',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sainte-Mesme 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sainte-mesme', 'serrurier urgence sainte-mesme', 'ouverture porte sainte-mesme', 'serrurier 24h sainte-mesme', 'dépannage serrure sainte-mesme']
};

export default function Page() {
  return <CityPage 
    cityName="Sainte-Mesme"
    citySlug="sainte-mesme"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sainte-Mesme - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sainte-mesme", "serrurier urgence sainte-mesme", "ouverture porte sainte-mesme", "serrurier 24h sainte-mesme", "dépannage serrure sainte-mesme"]}
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