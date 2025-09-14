import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pontcarré',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pontcarré 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pontcarre', 'serrurier urgence pontcarre', 'ouverture porte pontcarre', 'serrurier 24h pontcarre', 'dépannage serrure pontcarre']
};

export default function Page() {
  return <CityPage 
    cityName="Pontcarré"
    citySlug="pontcarre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pontcarré - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pontcarre", "serrurier urgence pontcarre", "ouverture porte pontcarre", "serrurier 24h pontcarre", "dépannage serrure pontcarre"]}
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