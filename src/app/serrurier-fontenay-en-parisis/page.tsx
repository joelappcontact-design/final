import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontenay-en-Parisis',
  department: '95',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontenay-en-Parisis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontenay-en-parisis', 'serrurier urgence fontenay-en-parisis', 'ouverture porte fontenay-en-parisis', 'serrurier 24h fontenay-en-parisis', 'dépannage serrure fontenay-en-parisis']
};

export default function Page() {
  return <CityPage 
    cityName="Fontenay-en-Parisis"
    citySlug="fontenay-en-parisis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontenay-en-Parisis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontenay-en-parisis", "serrurier urgence fontenay-en-parisis", "ouverture porte fontenay-en-parisis", "serrurier 24h fontenay-en-parisis", "dépannage serrure fontenay-en-parisis"]}
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