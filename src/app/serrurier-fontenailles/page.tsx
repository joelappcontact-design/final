import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontenailles',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontenailles 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontenailles', 'serrurier urgence fontenailles', 'ouverture porte fontenailles', 'serrurier 24h fontenailles', 'dépannage serrure fontenailles']
};

export default function Page() {
  return <CityPage 
    cityName="Fontenailles"
    citySlug="fontenailles"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontenailles - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontenailles", "serrurier urgence fontenailles", "ouverture porte fontenailles", "serrurier 24h fontenailles", "dépannage serrure fontenailles"]}
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