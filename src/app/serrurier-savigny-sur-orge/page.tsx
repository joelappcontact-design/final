import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Savigny-sur-Orge',
  department: '91',
  population: '37000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Savigny-sur-Orge 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier savigny-sur-orge', 'serrurier urgence savigny-sur-orge', 'ouverture porte savigny-sur-orge', 'serrurier 24h savigny-sur-orge', 'dépannage serrure savigny-sur-orge']
};

export default function Page() {
  return <CityPage 
    cityName="Savigny-sur-Orge"
    citySlug="savigny-sur-orge"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Savigny-sur-Orge - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier savigny-sur-orge", "serrurier urgence savigny-sur-orge", "ouverture porte savigny-sur-orge", "serrurier 24h savigny-sur-orge", "dépannage serrure savigny-sur-orge"]}
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