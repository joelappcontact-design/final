import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Grosrouvre',
  department: '78',
  population: '1800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Grosrouvre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier grosrouvre', 'serrurier urgence grosrouvre', 'ouverture porte grosrouvre', 'serrurier 24h grosrouvre', 'dépannage serrure grosrouvre']
};

export default function Page() {
  return <CityPage 
    cityName="Grosrouvre"
    citySlug="grosrouvre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Grosrouvre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier grosrouvre", "serrurier urgence grosrouvre", "ouverture porte grosrouvre", "serrurier 24h grosrouvre", "dépannage serrure grosrouvre"]}
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