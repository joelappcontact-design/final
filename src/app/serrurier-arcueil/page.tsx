import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Arcueil',
  department: '91',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Arcueil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier arcueil', 'serrurier urgence arcueil', 'ouverture porte arcueil', 'serrurier 24h arcueil', 'dépannage serrure arcueil']
};

export default function Page() {
  return <CityPage 
    cityName="Arcueil"
    citySlug="arcueil"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Arcueil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier arcueil", "serrurier urgence arcueil", "ouverture porte arcueil", "serrurier 24h arcueil", "dépannage serrure arcueil"]}
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