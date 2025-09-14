import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Clos-Fontaine',
  department: '77',
  population: '300',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Clos-Fontaine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier clos-fontaine', 'serrurier urgence clos-fontaine', 'ouverture porte clos-fontaine', 'serrurier 24h clos-fontaine', 'dépannage serrure clos-fontaine']
};

export default function Page() {
  return <CityPage 
    cityName="Clos-Fontaine"
    citySlug="clos-fontaine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Clos-Fontaine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier clos-fontaine", "serrurier urgence clos-fontaine", "ouverture porte clos-fontaine", "serrurier 24h clos-fontaine", "dépannage serrure clos-fontaine"]}
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