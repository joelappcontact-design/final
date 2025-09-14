import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Plessis-aux-Bois',
  department: '77',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Plessis-aux-Bois 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier plessis-aux-bois', 'serrurier urgence plessis-aux-bois', 'ouverture porte plessis-aux-bois', 'serrurier 24h plessis-aux-bois', 'dépannage serrure plessis-aux-bois']
};

export default function Page() {
  return <CityPage 
    cityName="Plessis-aux-Bois"
    citySlug="plessis-aux-bois"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Plessis-aux-Bois - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier plessis-aux-bois", "serrurier urgence plessis-aux-bois", "ouverture porte plessis-aux-bois", "serrurier 24h plessis-aux-bois", "dépannage serrure plessis-aux-bois"]}
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