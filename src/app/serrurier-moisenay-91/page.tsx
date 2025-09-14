import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Moisenay',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Moisenay 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier moisenay-91', 'serrurier urgence moisenay-91', 'ouverture porte moisenay-91', 'serrurier 24h moisenay-91', 'dépannage serrure moisenay-91']
};

export default function Page() {
  return <CityPage 
    cityName="Moisenay"
    citySlug="moisenay-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Moisenay - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier moisenay-91", "serrurier urgence moisenay-91", "ouverture porte moisenay-91", "serrurier 24h moisenay-91", "dépannage serrure moisenay-91"]}
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