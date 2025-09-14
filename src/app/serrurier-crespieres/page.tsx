import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Crespières',
  department: '78',
  population: '1500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Crespières 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier crespieres', 'serrurier urgence crespieres', 'ouverture porte crespieres', 'serrurier 24h crespieres', 'dépannage serrure crespieres']
};

export default function Page() {
  return <CityPage 
    cityName="Crespières"
    citySlug="crespieres"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Crespières - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier crespieres", "serrurier urgence crespieres", "ouverture porte crespieres", "serrurier 24h crespieres", "dépannage serrure crespieres"]}
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