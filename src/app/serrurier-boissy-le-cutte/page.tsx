import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boissy-le-Cutté',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boissy-le-Cutté 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boissy-le-cutte', 'serrurier urgence boissy-le-cutte', 'ouverture porte boissy-le-cutte', 'serrurier 24h boissy-le-cutte', 'dépannage serrure boissy-le-cutte']
};

export default function Page() {
  return <CityPage 
    cityName="Boissy-le-Cutté"
    citySlug="boissy-le-cutte"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boissy-le-Cutté - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boissy-le-cutte", "serrurier urgence boissy-le-cutte", "ouverture porte boissy-le-cutte", "serrurier 24h boissy-le-cutte", "dépannage serrure boissy-le-cutte"]}
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