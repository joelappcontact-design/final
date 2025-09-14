import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Louan-Villegruis-Fontaine',
  department: '77',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Louan-Villegruis-Fontaine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier louan-villegruis-fontaine', 'serrurier urgence louan-villegruis-fontaine', 'ouverture porte louan-villegruis-fontaine', 'serrurier 24h louan-villegruis-fontaine', 'dépannage serrure louan-villegruis-fontaine']
};

export default function Page() {
  return <CityPage 
    cityName="Louan-Villegruis-Fontaine"
    citySlug="louan-villegruis-fontaine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Louan-Villegruis-Fontaine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier louan-villegruis-fontaine", "serrurier urgence louan-villegruis-fontaine", "ouverture porte louan-villegruis-fontaine", "serrurier 24h louan-villegruis-fontaine", "dépannage serrure louan-villegruis-fontaine"]}
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