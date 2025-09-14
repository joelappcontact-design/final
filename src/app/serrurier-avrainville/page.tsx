import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Avrainville',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Avrainville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier avrainville', 'serrurier urgence avrainville', 'ouverture porte avrainville', 'serrurier 24h avrainville', 'dépannage serrure avrainville']
};

export default function Page() {
  return <CityPage 
    cityName="Avrainville"
    citySlug="avrainville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Avrainville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier avrainville", "serrurier urgence avrainville", "ouverture porte avrainville", "serrurier 24h avrainville", "dépannage serrure avrainville"]}
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