import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Garancières',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Garancières 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier garancieres', 'serrurier urgence garancieres', 'ouverture porte garancieres', 'serrurier 24h garancieres', 'dépannage serrure garancieres']
};

export default function Page() {
  return <CityPage 
    cityName="Garancières"
    citySlug="garancieres"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Garancières - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier garancieres", "serrurier urgence garancieres", "ouverture porte garancieres", "serrurier 24h garancieres", "dépannage serrure garancieres"]}
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