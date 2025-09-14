import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chaville-Centre',
  department: '92',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chaville-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chaville-centre', 'serrurier urgence chaville-centre', 'ouverture porte chaville-centre', 'serrurier 24h chaville-centre', 'dépannage serrure chaville-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Chaville-Centre"
    citySlug="chaville-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chaville-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chaville-centre", "serrurier urgence chaville-centre", "ouverture porte chaville-centre", "serrurier 24h chaville-centre", "dépannage serrure chaville-centre"]}
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