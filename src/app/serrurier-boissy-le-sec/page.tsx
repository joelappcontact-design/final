import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boissy-le-Sec',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boissy-le-Sec 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boissy-le-sec', 'serrurier urgence boissy-le-sec', 'ouverture porte boissy-le-sec', 'serrurier 24h boissy-le-sec', 'dépannage serrure boissy-le-sec']
};

export default function Page() {
  return <CityPage 
    cityName="Boissy-le-Sec"
    citySlug="boissy-le-sec"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boissy-le-Sec - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boissy-le-sec", "serrurier urgence boissy-le-sec", "ouverture porte boissy-le-sec", "serrurier 24h boissy-le-sec", "dépannage serrure boissy-le-sec"]}
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