import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gouaix',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gouaix 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gouaix-91', 'serrurier urgence gouaix-91', 'ouverture porte gouaix-91', 'serrurier 24h gouaix-91', 'dépannage serrure gouaix-91']
};

export default function Page() {
  return <CityPage 
    cityName="Gouaix"
    citySlug="gouaix-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gouaix - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gouaix-91", "serrurier urgence gouaix-91", "ouverture porte gouaix-91", "serrurier 24h gouaix-91", "dépannage serrure gouaix-91"]}
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