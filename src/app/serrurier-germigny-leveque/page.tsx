import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Germigny-l\'Évêque',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Germigny-l\'Évêque 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier germigny-leveque', 'serrurier urgence germigny-leveque', 'ouverture porte germigny-leveque', 'serrurier 24h germigny-leveque', 'dépannage serrure germigny-leveque']
};

export default function Page() {
  return <CityPage 
    cityName="Germigny-l\'Évêque"
    citySlug="germigny-leveque"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Germigny-l\'Évêque - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier germigny-leveque", "serrurier urgence germigny-leveque", "ouverture porte germigny-leveque", "serrurier 24h germigny-leveque", "dépannage serrure germigny-leveque"]}
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