import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Grisy-Suisnes',
  department: '77',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Grisy-Suisnes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier grisy-suisnes', 'serrurier urgence grisy-suisnes', 'ouverture porte grisy-suisnes', 'serrurier 24h grisy-suisnes', 'dépannage serrure grisy-suisnes']
};

export default function Page() {
  return <CityPage 
    cityName="Grisy-Suisnes"
    citySlug="grisy-suisnes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Grisy-Suisnes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier grisy-suisnes", "serrurier urgence grisy-suisnes", "ouverture porte grisy-suisnes", "serrurier 24h grisy-suisnes", "dépannage serrure grisy-suisnes"]}
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