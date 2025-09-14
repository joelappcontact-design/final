import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Plessis-Robinson-Centre',
  department: '92',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Plessis-Robinson-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-plessis-robinson-centre', 'serrurier urgence le-plessis-robinson-centre', 'ouverture porte le-plessis-robinson-centre', 'serrurier 24h le-plessis-robinson-centre', 'dépannage serrure le-plessis-robinson-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Le Plessis-Robinson-Centre"
    citySlug="le-plessis-robinson-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Plessis-Robinson-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-plessis-robinson-centre", "serrurier urgence le-plessis-robinson-centre", "ouverture porte le-plessis-robinson-centre", "serrurier 24h le-plessis-robinson-centre", "dépannage serrure le-plessis-robinson-centre"]}
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