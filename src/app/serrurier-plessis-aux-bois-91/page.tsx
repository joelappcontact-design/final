import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Plessis-aux-Bois',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Plessis-aux-Bois 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier plessis-aux-bois-91', 'serrurier urgence plessis-aux-bois-91', 'ouverture porte plessis-aux-bois-91', 'serrurier 24h plessis-aux-bois-91', 'dépannage serrure plessis-aux-bois-91']
};

export default function Page() {
  return <CityPage 
    cityName="Plessis-aux-Bois"
    citySlug="plessis-aux-bois-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Plessis-aux-Bois - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier plessis-aux-bois-91", "serrurier urgence plessis-aux-bois-91", "ouverture porte plessis-aux-bois-91", "serrurier 24h plessis-aux-bois-91", "dépannage serrure plessis-aux-bois-91"]}
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