import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Passy-sur-Seine',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Passy-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier passy-sur-seine', 'serrurier urgence passy-sur-seine', 'ouverture porte passy-sur-seine', 'serrurier 24h passy-sur-seine', 'dépannage serrure passy-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Passy-sur-Seine"
    citySlug="passy-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Passy-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier passy-sur-seine", "serrurier urgence passy-sur-seine", "ouverture porte passy-sur-seine", "serrurier 24h passy-sur-seine", "dépannage serrure passy-sur-seine"]}
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