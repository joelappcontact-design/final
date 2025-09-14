import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mondreville',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mondreville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mondreville-78', 'serrurier urgence mondreville-78', 'ouverture porte mondreville-78', 'serrurier 24h mondreville-78', 'dépannage serrure mondreville-78']
};

export default function Page() {
  return <CityPage 
    cityName="Mondreville"
    citySlug="mondreville-78"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mondreville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mondreville-78", "serrurier urgence mondreville-78", "ouverture porte mondreville-78", "serrurier 24h mondreville-78", "dépannage serrure mondreville-78"]}
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