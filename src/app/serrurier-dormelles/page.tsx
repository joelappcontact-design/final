import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Dormelles',
  department: '77',
  population: '800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Dormelles 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dormelles', 'serrurier urgence dormelles', 'ouverture porte dormelles', 'serrurier 24h dormelles', 'dépannage serrure dormelles']
};

export default function Page() {
  return <CityPage 
    cityName="Dormelles"
    citySlug="dormelles"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Dormelles - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dormelles", "serrurier urgence dormelles", "ouverture porte dormelles", "serrurier 24h dormelles", "dépannage serrure dormelles"]}
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