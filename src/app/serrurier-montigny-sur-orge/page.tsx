import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montigny-sur-Orge',
  department: '91',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montigny-sur-Orge 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montigny-sur-orge', 'serrurier urgence montigny-sur-orge', 'ouverture porte montigny-sur-orge', 'serrurier 24h montigny-sur-orge', 'dépannage serrure montigny-sur-orge']
};

export default function Page() {
  return <CityPage 
    cityName="Montigny-sur-Orge"
    citySlug="montigny-sur-orge"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montigny-sur-Orge - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montigny-sur-orge", "serrurier urgence montigny-sur-orge", "ouverture porte montigny-sur-orge", "serrurier 24h montigny-sur-orge", "dépannage serrure montigny-sur-orge"]}
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