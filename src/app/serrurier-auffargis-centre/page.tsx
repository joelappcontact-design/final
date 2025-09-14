import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Auffargis-Centre',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Auffargis-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier auffargis-centre', 'serrurier urgence auffargis-centre', 'ouverture porte auffargis-centre', 'serrurier 24h auffargis-centre', 'dépannage serrure auffargis-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Auffargis-Centre"
    citySlug="auffargis-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Auffargis-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier auffargis-centre", "serrurier urgence auffargis-centre", "ouverture porte auffargis-centre", "serrurier 24h auffargis-centre", "dépannage serrure auffargis-centre"]}
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