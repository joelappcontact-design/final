import CityPage from '@/components/CityPage';

const cityData = {
  name: 'D\'Huison-Longueville',
  department: '91',
  population: '1500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence D\'Huison-Longueville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dhuison-longueville', 'serrurier urgence dhuison-longueville', 'ouverture porte dhuison-longueville', 'serrurier 24h dhuison-longueville', 'dépannage serrure dhuison-longueville']
};

export default function Page() {
  return <CityPage 
    cityName="D\'Huison-Longueville"
    citySlug="dhuison-longueville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="D\'Huison-Longueville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dhuison-longueville", "serrurier urgence dhuison-longueville", "ouverture porte dhuison-longueville", "serrurier 24h dhuison-longueville", "dépannage serrure dhuison-longueville"]}
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