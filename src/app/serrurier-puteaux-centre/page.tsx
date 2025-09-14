import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Puteaux-Centre',
  department: '92',
  population: '45000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Puteaux-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier puteaux-centre', 'serrurier urgence puteaux-centre', 'ouverture porte puteaux-centre', 'serrurier 24h puteaux-centre', 'dépannage serrure puteaux-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Puteaux-Centre"
    citySlug="puteaux-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Puteaux-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier puteaux-centre", "serrurier urgence puteaux-centre", "ouverture porte puteaux-centre", "serrurier 24h puteaux-centre", "dépannage serrure puteaux-centre"]}
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