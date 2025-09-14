import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montreuil',
  department: '93',
  population: '109000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montreuil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montreuil', 'serrurier urgence montreuil', 'ouverture porte montreuil', 'serrurier 24h montreuil', 'dépannage serrure montreuil']
};

export default function Page() {
  return <CityPage 
    cityName="Montreuil"
    citySlug="montreuil"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montreuil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montreuil", "serrurier urgence montreuil", "ouverture porte montreuil", "serrurier 24h montreuil", "dépannage serrure montreuil"]}
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