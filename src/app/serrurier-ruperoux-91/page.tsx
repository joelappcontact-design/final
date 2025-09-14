import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rupéreux',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rupéreux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ruperoux-91', 'serrurier urgence ruperoux-91', 'ouverture porte ruperoux-91', 'serrurier 24h ruperoux-91', 'dépannage serrure ruperoux-91']
};

export default function Page() {
  return <CityPage 
    cityName="Rupéreux"
    citySlug="ruperoux-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rupéreux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ruperoux-91", "serrurier urgence ruperoux-91", "ouverture porte ruperoux-91", "serrurier 24h ruperoux-91", "dépannage serrure ruperoux-91"]}
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