import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Cesson-Vert',
  department: '77',
  population: '1200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Cesson-Vert 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier cesson-vert', 'serrurier urgence cesson-vert', 'ouverture porte cesson-vert', 'serrurier 24h cesson-vert', 'dépannage serrure cesson-vert']
};

export default function Page() {
  return <CityPage 
    cityName="Cesson-Vert"
    citySlug="cesson-vert"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Cesson-Vert - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier cesson-vert", "serrurier urgence cesson-vert", "ouverture porte cesson-vert", "serrurier 24h cesson-vert", "dépannage serrure cesson-vert"]}
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