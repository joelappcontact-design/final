import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Luisetaines',
  department: '77',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Luisetaines 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier luisetaines', 'serrurier urgence luisetaines', 'ouverture porte luisetaines', 'serrurier 24h luisetaines', 'dépannage serrure luisetaines']
};

export default function Page() {
  return <CityPage 
    cityName="Luisetaines"
    citySlug="luisetaines"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Luisetaines - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier luisetaines", "serrurier urgence luisetaines", "ouverture porte luisetaines", "serrurier 24h luisetaines", "dépannage serrure luisetaines"]}
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