import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Auffargis',
  department: '78',
  population: '2000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Auffargis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier auffargis', 'serrurier urgence auffargis', 'ouverture porte auffargis', 'serrurier 24h auffargis', 'dépannage serrure auffargis']
};

export default function Page() {
  return <CityPage 
    cityName="Auffargis"
    citySlug="auffargis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Auffargis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier auffargis", "serrurier urgence auffargis", "ouverture porte auffargis", "serrurier 24h auffargis", "dépannage serrure auffargis"]}
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