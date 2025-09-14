import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Orly-sur-Morin',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Orly-sur-Morin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier orly-sur-morin-91', 'serrurier urgence orly-sur-morin-91', 'ouverture porte orly-sur-morin-91', 'serrurier 24h orly-sur-morin-91', 'dépannage serrure orly-sur-morin-91']
};

export default function Page() {
  return <CityPage 
    cityName="Orly-sur-Morin"
    citySlug="orly-sur-morin-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Orly-sur-Morin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier orly-sur-morin-91", "serrurier urgence orly-sur-morin-91", "ouverture porte orly-sur-morin-91", "serrurier 24h orly-sur-morin-91", "dépannage serrure orly-sur-morin-91"]}
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