import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Meudon-Centre',
  department: '92',
  population: '45000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Meudon-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier meudon-centre', 'serrurier urgence meudon-centre', 'ouverture porte meudon-centre', 'serrurier 24h meudon-centre', 'dépannage serrure meudon-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Meudon-Centre"
    citySlug="meudon-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Meudon-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier meudon-centre", "serrurier urgence meudon-centre", "ouverture porte meudon-centre", "serrurier 24h meudon-centre", "dépannage serrure meudon-centre"]}
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