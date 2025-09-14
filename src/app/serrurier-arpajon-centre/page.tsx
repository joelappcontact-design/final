import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Arpajon-Centre',
  department: '91',
  population: '11000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Arpajon-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier arpajon-centre', 'serrurier urgence arpajon-centre', 'ouverture porte arpajon-centre', 'serrurier 24h arpajon-centre', 'dépannage serrure arpajon-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Arpajon-Centre"
    citySlug="arpajon-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Arpajon-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier arpajon-centre", "serrurier urgence arpajon-centre", "ouverture porte arpajon-centre", "serrurier 24h arpajon-centre", "dépannage serrure arpajon-centre"]}
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