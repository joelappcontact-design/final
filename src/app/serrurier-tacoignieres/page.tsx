import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Tacoignières',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Tacoignières 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier tacoignieres', 'serrurier urgence tacoignieres', 'ouverture porte tacoignieres', 'serrurier 24h tacoignieres', 'dépannage serrure tacoignieres']
};

export default function Page() {
  return <CityPage 
    cityName="Tacoignières"
    citySlug="tacoignieres"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Tacoignières - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier tacoignieres", "serrurier urgence tacoignieres", "ouverture porte tacoignieres", "serrurier 24h tacoignieres", "dépannage serrure tacoignieres"]}
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