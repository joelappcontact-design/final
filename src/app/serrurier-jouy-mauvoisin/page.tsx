import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Jouy-Mauvoisin',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Jouy-Mauvoisin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier jouy-mauvoisin', 'serrurier urgence jouy-mauvoisin', 'ouverture porte jouy-mauvoisin', 'serrurier 24h jouy-mauvoisin', 'dépannage serrure jouy-mauvoisin']
};

export default function Page() {
  return <CityPage 
    cityName="Jouy-Mauvoisin"
    citySlug="jouy-mauvoisin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Jouy-Mauvoisin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier jouy-mauvoisin", "serrurier urgence jouy-mauvoisin", "ouverture porte jouy-mauvoisin", "serrurier 24h jouy-mauvoisin", "dépannage serrure jouy-mauvoisin"]}
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