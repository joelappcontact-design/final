import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ville-d\'Avray-Centre',
  department: '92',
  population: '11000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ville-d\'Avray-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ville-davray-centre', 'serrurier urgence ville-davray-centre', 'ouverture porte ville-davray-centre', 'serrurier 24h ville-davray-centre', 'dépannage serrure ville-davray-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Ville-d\'Avray-Centre"
    citySlug="ville-davray-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ville-d\'Avray-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ville-davray-centre", "serrurier urgence ville-davray-centre", "ouverture porte ville-davray-centre", "serrurier 24h ville-davray-centre", "dépannage serrure ville-davray-centre"]}
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