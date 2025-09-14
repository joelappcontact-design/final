import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gometz-le-Châtel',
  department: '92',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gometz-le-Châtel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gometz-le-chatel', 'serrurier urgence gometz-le-chatel', 'ouverture porte gometz-le-chatel', 'serrurier 24h gometz-le-chatel', 'dépannage serrure gometz-le-chatel']
};

export default function Page() {
  return <CityPage 
    cityName="Gometz-le-Châtel"
    citySlug="gometz-le-chatel"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gometz-le-Châtel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gometz-le-chatel", "serrurier urgence gometz-le-chatel", "ouverture porte gometz-le-chatel", "serrurier 24h gometz-le-chatel", "dépannage serrure gometz-le-chatel"]}
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