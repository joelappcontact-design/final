import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bièvres-Centre',
  department: '91',
  population: '4500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bièvres-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bievres-centre', 'serrurier urgence bievres-centre', 'ouverture porte bievres-centre', 'serrurier 24h bievres-centre', 'dépannage serrure bievres-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Bièvres-Centre"
    citySlug="bievres-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bièvres-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bievres-centre", "serrurier urgence bievres-centre", "ouverture porte bievres-centre", "serrurier 24h bievres-centre", "dépannage serrure bievres-centre"]}
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