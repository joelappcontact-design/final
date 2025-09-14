import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Roche-Guyon',
  department: '78',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Roche-Guyon 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-roche-guyon', 'serrurier urgence la-roche-guyon', 'ouverture porte la-roche-guyon', 'serrurier 24h la-roche-guyon', 'dépannage serrure la-roche-guyon']
};

export default function Page() {
  return <CityPage 
    cityName="La Roche-Guyon"
    citySlug="la-roche-guyon"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Roche-Guyon - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-roche-guyon", "serrurier urgence la-roche-guyon", "ouverture porte la-roche-guyon", "serrurier 24h la-roche-guyon", "dépannage serrure la-roche-guyon"]}
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