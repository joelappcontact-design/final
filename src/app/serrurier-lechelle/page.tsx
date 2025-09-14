import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Léchelle',
  department: '77',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Léchelle 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lechelle', 'serrurier urgence lechelle', 'ouverture porte lechelle', 'serrurier 24h lechelle', 'dépannage serrure lechelle']
};

export default function Page() {
  return <CityPage 
    cityName="Léchelle"
    citySlug="lechelle"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Léchelle - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lechelle", "serrurier urgence lechelle", "ouverture porte lechelle", "serrurier 24h lechelle", "dépannage serrure lechelle"]}
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