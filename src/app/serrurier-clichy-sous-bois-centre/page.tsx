import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Clichy-sous-Bois-Centre',
  department: '93',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Clichy-sous-Bois-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier clichy-sous-bois-centre', 'serrurier urgence clichy-sous-bois-centre', 'ouverture porte clichy-sous-bois-centre', 'serrurier 24h clichy-sous-bois-centre', 'dépannage serrure clichy-sous-bois-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Clichy-sous-Bois-Centre"
    citySlug="clichy-sous-bois-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Clichy-sous-Bois-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier clichy-sous-bois-centre", "serrurier urgence clichy-sous-bois-centre", "ouverture porte clichy-sous-bois-centre", "serrurier 24h clichy-sous-bois-centre", "dépannage serrure clichy-sous-bois-centre"]}
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