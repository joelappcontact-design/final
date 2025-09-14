import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Plessis-l\'Évêque',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Plessis-l\'Évêque 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier plessis-leveque', 'serrurier urgence plessis-leveque', 'ouverture porte plessis-leveque', 'serrurier 24h plessis-leveque', 'dépannage serrure plessis-leveque']
};

export default function Page() {
  return <CityPage 
    cityName="Plessis-l\'Évêque"
    citySlug="plessis-leveque"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Plessis-l\'Évêque - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier plessis-leveque", "serrurier urgence plessis-leveque", "ouverture porte plessis-leveque", "serrurier 24h plessis-leveque", "dépannage serrure plessis-leveque"]}
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