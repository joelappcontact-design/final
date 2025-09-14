import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Marolles-sur-Seine',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Marolles-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier marolles-sur-seine-91', 'serrurier urgence marolles-sur-seine-91', 'ouverture porte marolles-sur-seine-91', 'serrurier 24h marolles-sur-seine-91', 'dépannage serrure marolles-sur-seine-91']
};

export default function Page() {
  return <CityPage 
    cityName="Marolles-sur-Seine"
    citySlug="marolles-sur-seine-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Marolles-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier marolles-sur-seine-91", "serrurier urgence marolles-sur-seine-91", "ouverture porte marolles-sur-seine-91", "serrurier 24h marolles-sur-seine-91", "dépannage serrure marolles-sur-seine-91"]}
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