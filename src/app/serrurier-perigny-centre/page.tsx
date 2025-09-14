import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Périgny-Centre',
  department: '94',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Périgny-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier perigny-centre', 'serrurier urgence perigny-centre', 'ouverture porte perigny-centre', 'serrurier 24h perigny-centre', 'dépannage serrure perigny-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Périgny-Centre"
    citySlug="perigny-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Périgny-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier perigny-centre", "serrurier urgence perigny-centre", "ouverture porte perigny-centre", "serrurier 24h perigny-centre", "dépannage serrure perigny-centre"]}
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