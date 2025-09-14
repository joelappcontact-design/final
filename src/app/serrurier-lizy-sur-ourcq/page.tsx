import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Lizy-sur-Ourcq',
  department: '77',
  population: '3500',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Lizy-sur-Ourcq 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lizy-sur-ourcq', 'serrurier urgence lizy-sur-ourcq', 'ouverture porte lizy-sur-ourcq', 'serrurier 24h lizy-sur-ourcq', 'dépannage serrure lizy-sur-ourcq']
};

export default function Page() {
  return <CityPage 
    cityName="Lizy-sur-Ourcq"
    citySlug="lizy-sur-ourcq"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Lizy-sur-Ourcq - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lizy-sur-ourcq", "serrurier urgence lizy-sur-ourcq", "ouverture porte lizy-sur-ourcq", "serrurier 24h lizy-sur-ourcq", "dépannage serrure lizy-sur-ourcq"]}
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