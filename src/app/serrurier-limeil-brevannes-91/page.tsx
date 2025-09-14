import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Limeil-Brévannes',
  department: '91',
  population: '21000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Limeil-Brévannes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier limeil-brevannes-91', 'serrurier urgence limeil-brevannes-91', 'ouverture porte limeil-brevannes-91', 'serrurier 24h limeil-brevannes-91', 'dépannage serrure limeil-brevannes-91']
};

export default function Page() {
  return <CityPage 
    cityName="Limeil-Brévannes"
    citySlug="limeil-brevannes-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Limeil-Brévannes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier limeil-brevannes-91", "serrurier urgence limeil-brevannes-91", "ouverture porte limeil-brevannes-91", "serrurier 24h limeil-brevannes-91", "dépannage serrure limeil-brevannes-91"]}
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