import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vaucresson-Centre',
  department: '92',
  population: '9000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vaucresson-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vaucresson-centre', 'serrurier urgence vaucresson-centre', 'ouverture porte vaucresson-centre', 'serrurier 24h vaucresson-centre', 'dépannage serrure vaucresson-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Vaucresson-Centre"
    citySlug="vaucresson-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vaucresson-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vaucresson-centre", "serrurier urgence vaucresson-centre", "ouverture porte vaucresson-centre", "serrurier 24h vaucresson-centre", "dépannage serrure vaucresson-centre"]}
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