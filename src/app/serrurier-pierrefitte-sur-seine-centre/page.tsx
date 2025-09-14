import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pierrefitte-sur-Seine-Centre',
  department: '93',
  population: '36000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pierrefitte-sur-Seine-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pierrefitte-sur-seine-centre', 'serrurier urgence pierrefitte-sur-seine-centre', 'ouverture porte pierrefitte-sur-seine-centre', 'serrurier 24h pierrefitte-sur-seine-centre', 'dépannage serrure pierrefitte-sur-seine-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Pierrefitte-sur-Seine-Centre"
    citySlug="pierrefitte-sur-seine-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pierrefitte-sur-Seine-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pierrefitte-sur-seine-centre", "serrurier urgence pierrefitte-sur-seine-centre", "ouverture porte pierrefitte-sur-seine-centre", "serrurier 24h pierrefitte-sur-seine-centre", "dépannage serrure pierrefitte-sur-seine-centre"]}
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