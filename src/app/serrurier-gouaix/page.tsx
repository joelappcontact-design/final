import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gouaix',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gouaix 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gouaix', 'serrurier urgence gouaix', 'ouverture porte gouaix', 'serrurier 24h gouaix', 'dépannage serrure gouaix']
};

export default function Page() {
  return <CityPage 
    cityName="Gouaix"
    citySlug="gouaix"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gouaix - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gouaix", "serrurier urgence gouaix", "ouverture porte gouaix", "serrurier 24h gouaix", "dépannage serrure gouaix"]}
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