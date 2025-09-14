import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boullay-les-Troux',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boullay-les-Troux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boullay-les-troux', 'serrurier urgence boullay-les-troux', 'ouverture porte boullay-les-troux', 'serrurier 24h boullay-les-troux', 'dépannage serrure boullay-les-troux']
};

export default function Page() {
  return <CityPage 
    cityName="Boullay-les-Troux"
    citySlug="boullay-les-troux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boullay-les-Troux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boullay-les-troux", "serrurier urgence boullay-les-troux", "ouverture porte boullay-les-troux", "serrurier 24h boullay-les-troux", "dépannage serrure boullay-les-troux"]}
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