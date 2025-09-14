import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montreuil',
  department: '93',
  population: '110000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montreuil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montreuil-93', 'serrurier urgence montreuil-93', 'ouverture porte montreuil-93', 'serrurier 24h montreuil-93', 'dépannage serrure montreuil-93']
};

export default function Page() {
  return <CityPage 
    cityName="Montreuil"
    citySlug="montreuil-93"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montreuil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montreuil-93", "serrurier urgence montreuil-93", "ouverture porte montreuil-93", "serrurier 24h montreuil-93", "dépannage serrure montreuil-93"]}
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