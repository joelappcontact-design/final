import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Kremlin-Bicêtre',
  department: '94',
  population: '26000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Kremlin-Bicêtre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-kremlin-bicetre', 'serrurier urgence le-kremlin-bicetre', 'ouverture porte le-kremlin-bicetre', 'serrurier 24h le-kremlin-bicetre', 'dépannage serrure le-kremlin-bicetre']
};

export default function Page() {
  return <CityPage 
    cityName="Le Kremlin-Bicêtre"
    citySlug="le-kremlin-bicetre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Kremlin-Bicêtre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-kremlin-bicetre", "serrurier urgence le-kremlin-bicetre", "ouverture porte le-kremlin-bicetre", "serrurier 24h le-kremlin-bicetre", "dépannage serrure le-kremlin-bicetre"]}
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