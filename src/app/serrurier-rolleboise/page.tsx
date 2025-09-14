import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rolleboise',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rolleboise 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rolleboise', 'serrurier urgence rolleboise', 'ouverture porte rolleboise', 'serrurier 24h rolleboise', 'dépannage serrure rolleboise']
};

export default function Page() {
  return <CityPage 
    cityName="Rolleboise"
    citySlug="rolleboise"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rolleboise - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rolleboise", "serrurier urgence rolleboise", "ouverture porte rolleboise", "serrurier 24h rolleboise", "dépannage serrure rolleboise"]}
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