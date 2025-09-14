import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Val-de-Reuil',
  department: '78',
  population: '13000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Val-de-Reuil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier val-de-reuil', 'serrurier urgence val-de-reuil', 'ouverture porte val-de-reuil', 'serrurier 24h val-de-reuil', 'dépannage serrure val-de-reuil']
};

export default function Page() {
  return <CityPage 
    cityName="Val-de-Reuil"
    citySlug="val-de-reuil"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Val-de-Reuil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier val-de-reuil", "serrurier urgence val-de-reuil", "ouverture porte val-de-reuil", "serrurier 24h val-de-reuil", "dépannage serrure val-de-reuil"]}
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