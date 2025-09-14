import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Auvernaux',
  department: '91',
  population: '400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Auvernaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier auvernaux', 'serrurier urgence auvernaux', 'ouverture porte auvernaux', 'serrurier 24h auvernaux', 'dépannage serrure auvernaux']
};

export default function Page() {
  return <CityPage 
    cityName="Auvernaux"
    citySlug="auvernaux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Auvernaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier auvernaux", "serrurier urgence auvernaux", "ouverture porte auvernaux", "serrurier 24h auvernaux", "dépannage serrure auvernaux"]}
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