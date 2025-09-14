import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Puiseux-en-France',
  department: '95',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Puiseux-en-France 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier puiseux-en-france', 'serrurier urgence puiseux-en-france', 'ouverture porte puiseux-en-france', 'serrurier 24h puiseux-en-france', 'dépannage serrure puiseux-en-france']
};

export default function Page() {
  return <CityPage 
    cityName="Puiseux-en-France"
    citySlug="puiseux-en-france"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Puiseux-en-France - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier puiseux-en-france", "serrurier urgence puiseux-en-france", "ouverture porte puiseux-en-france", "serrurier 24h puiseux-en-france", "dépannage serrure puiseux-en-france"]}
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