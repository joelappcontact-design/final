import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Essonnes',
  department: '91',
  population: '12000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Essonnes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier essonnes', 'serrurier urgence essonnes', 'ouverture porte essonnes', 'serrurier 24h essonnes', 'dépannage serrure essonnes']
};

export default function Page() {
  return <CityPage 
    cityName="Essonnes"
    citySlug="essonnes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Essonnes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier essonnes", "serrurier urgence essonnes", "ouverture porte essonnes", "serrurier 24h essonnes", "dépannage serrure essonnes"]}
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