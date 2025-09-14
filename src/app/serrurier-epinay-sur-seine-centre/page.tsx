import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Épinay-sur-Seine-Centre',
  department: '93',
  population: '56000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Épinay-sur-Seine-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier epinay-sur-seine-centre', 'serrurier urgence epinay-sur-seine-centre', 'ouverture porte epinay-sur-seine-centre', 'serrurier 24h epinay-sur-seine-centre', 'dépannage serrure epinay-sur-seine-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Épinay-sur-Seine-Centre"
    citySlug="epinay-sur-seine-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Épinay-sur-Seine-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier epinay-sur-seine-centre", "serrurier urgence epinay-sur-seine-centre", "ouverture porte epinay-sur-seine-centre", "serrurier 24h epinay-sur-seine-centre", "dépannage serrure epinay-sur-seine-centre"]}
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