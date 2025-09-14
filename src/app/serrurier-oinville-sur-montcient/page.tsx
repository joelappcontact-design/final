import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Oinville-sur-Montcient',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Oinville-sur-Montcient 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier oinville-sur-montcient', 'serrurier urgence oinville-sur-montcient', 'ouverture porte oinville-sur-montcient', 'serrurier 24h oinville-sur-montcient', 'dépannage serrure oinville-sur-montcient']
};

export default function Page() {
  return <CityPage 
    cityName="Oinville-sur-Montcient"
    citySlug="oinville-sur-montcient"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Oinville-sur-Montcient - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier oinville-sur-montcient", "serrurier urgence oinville-sur-montcient", "ouverture porte oinville-sur-montcient", "serrurier 24h oinville-sur-montcient", "dépannage serrure oinville-sur-montcient"]}
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