import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fontenay-Mauvoisin',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fontenay-Mauvoisin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fontenay-mauvoisin', 'serrurier urgence fontenay-mauvoisin', 'ouverture porte fontenay-mauvoisin', 'serrurier 24h fontenay-mauvoisin', 'dépannage serrure fontenay-mauvoisin']
};

export default function Page() {
  return <CityPage 
    cityName="Fontenay-Mauvoisin"
    citySlug="fontenay-mauvoisin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fontenay-Mauvoisin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fontenay-mauvoisin", "serrurier urgence fontenay-mauvoisin", "ouverture porte fontenay-mauvoisin", "serrurier 24h fontenay-mauvoisin", "dépannage serrure fontenay-mauvoisin"]}
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