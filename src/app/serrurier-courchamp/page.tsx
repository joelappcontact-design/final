import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Courchamp',
  department: '77',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Courchamp 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier courchamp', 'serrurier urgence courchamp', 'ouverture porte courchamp', 'serrurier 24h courchamp', 'dépannage serrure courchamp']
};

export default function Page() {
  return <CityPage 
    cityName="Courchamp"
    citySlug="courchamp"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Courchamp - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier courchamp", "serrurier urgence courchamp", "ouverture porte courchamp", "serrurier 24h courchamp", "dépannage serrure courchamp"]}
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