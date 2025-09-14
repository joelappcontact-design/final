import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chenoise-Cucharmoy',
  department: '77',
  population: '1200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chenoise-Cucharmoy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chenoise-cucharmoy', 'serrurier urgence chenoise-cucharmoy', 'ouverture porte chenoise-cucharmoy', 'serrurier 24h chenoise-cucharmoy', 'dépannage serrure chenoise-cucharmoy']
};

export default function Page() {
  return <CityPage 
    cityName="Chenoise-Cucharmoy"
    citySlug="chenoise-cucharmoy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chenoise-Cucharmoy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chenoise-cucharmoy", "serrurier urgence chenoise-cucharmoy", "ouverture porte chenoise-cucharmoy", "serrurier 24h chenoise-cucharmoy", "dépannage serrure chenoise-cucharmoy"]}
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