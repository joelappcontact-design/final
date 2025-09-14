import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Marcoussis',
  department: '91',
  population: '8500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Marcoussis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier marcoussis', 'serrurier urgence marcoussis', 'ouverture porte marcoussis', 'serrurier 24h marcoussis', 'dépannage serrure marcoussis']
};

export default function Page() {
  return <CityPage 
    cityName="Marcoussis"
    citySlug="marcoussis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Marcoussis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier marcoussis", "serrurier urgence marcoussis", "ouverture porte marcoussis", "serrurier 24h marcoussis", "dépannage serrure marcoussis"]}
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