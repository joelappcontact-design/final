import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montigny-sur-Loing',
  department: '77',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montigny-sur-Loing 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montigny-sur-loing-77', 'serrurier urgence montigny-sur-loing-77', 'ouverture porte montigny-sur-loing-77', 'serrurier 24h montigny-sur-loing-77', 'dépannage serrure montigny-sur-loing-77']
};

export default function Page() {
  return <CityPage 
    cityName="Montigny-sur-Loing"
    citySlug="montigny-sur-loing-77"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montigny-sur-Loing - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montigny-sur-loing-77", "serrurier urgence montigny-sur-loing-77", "ouverture porte montigny-sur-loing-77", "serrurier 24h montigny-sur-loing-77", "dépannage serrure montigny-sur-loing-77"]}
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