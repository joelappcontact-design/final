import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Rennemoulin',
  department: '78',
  population: '450',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Rennemoulin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier rennemoulin', 'serrurier urgence rennemoulin', 'ouverture porte rennemoulin', 'serrurier 24h rennemoulin', 'dépannage serrure rennemoulin']
};

export default function Page() {
  return <CityPage 
    cityName="Rennemoulin"
    citySlug="rennemoulin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Rennemoulin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier rennemoulin", "serrurier urgence rennemoulin", "ouverture porte rennemoulin", "serrurier 24h rennemoulin", "dépannage serrure rennemoulin"]}
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