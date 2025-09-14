import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Oissery',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Oissery 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier oissery-91', 'serrurier urgence oissery-91', 'ouverture porte oissery-91', 'serrurier 24h oissery-91', 'dépannage serrure oissery-91']
};

export default function Page() {
  return <CityPage 
    cityName="Oissery"
    citySlug="oissery-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Oissery - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier oissery-91", "serrurier urgence oissery-91", "ouverture porte oissery-91", "serrurier 24h oissery-91", "dépannage serrure oissery-91"]}
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