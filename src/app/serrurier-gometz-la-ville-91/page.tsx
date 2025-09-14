import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gometz-la-Ville',
  department: '91',
  population: '1500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gometz-la-Ville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gometz-la-ville-91', 'serrurier urgence gometz-la-ville-91', 'ouverture porte gometz-la-ville-91', 'serrurier 24h gometz-la-ville-91', 'dépannage serrure gometz-la-ville-91']
};

export default function Page() {
  return <CityPage 
    cityName="Gometz-la-Ville"
    citySlug="gometz-la-ville-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gometz-la-Ville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gometz-la-ville-91", "serrurier urgence gometz-la-ville-91", "ouverture porte gometz-la-ville-91", "serrurier 24h gometz-la-ville-91", "dépannage serrure gometz-la-ville-91"]}
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