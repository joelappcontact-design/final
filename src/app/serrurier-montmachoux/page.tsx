import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montmachoux',
  department: '77',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montmachoux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montmachoux', 'serrurier urgence montmachoux', 'ouverture porte montmachoux', 'serrurier 24h montmachoux', 'dépannage serrure montmachoux']
};

export default function Page() {
  return <CityPage 
    cityName="Montmachoux"
    citySlug="montmachoux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montmachoux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montmachoux", "serrurier urgence montmachoux", "ouverture porte montmachoux", "serrurier 24h montmachoux", "dépannage serrure montmachoux"]}
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