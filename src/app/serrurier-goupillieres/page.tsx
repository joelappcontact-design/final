import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Goupillières',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Goupillières 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier goupillieres', 'serrurier urgence goupillieres', 'ouverture porte goupillieres', 'serrurier 24h goupillieres', 'dépannage serrure goupillieres']
};

export default function Page() {
  return <CityPage 
    cityName="Goupillières"
    citySlug="goupillieres"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Goupillières - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier goupillieres", "serrurier urgence goupillieres", "ouverture porte goupillieres", "serrurier 24h goupillieres", "dépannage serrure goupillieres"]}
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