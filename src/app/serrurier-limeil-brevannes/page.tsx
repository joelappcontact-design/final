import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Limeil-Brévannes',
  department: '94',
  population: '21000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Limeil-Brévannes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier limeil-brevannes', 'serrurier urgence limeil-brevannes', 'ouverture porte limeil-brevannes', 'serrurier 24h limeil-brevannes', 'dépannage serrure limeil-brevannes']
};

export default function Page() {
  return <CityPage 
    cityName="Limeil-Brévannes"
    citySlug="limeil-brevannes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Limeil-Brévannes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier limeil-brevannes", "serrurier urgence limeil-brevannes", "ouverture porte limeil-brevannes", "serrurier 24h limeil-brevannes", "dépannage serrure limeil-brevannes"]}
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