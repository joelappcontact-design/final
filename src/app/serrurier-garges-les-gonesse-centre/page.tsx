import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Garges-lès-Gonesse-Centre',
  department: '95',
  population: '41000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Garges-lès-Gonesse-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier garges-les-gonesse-centre', 'serrurier urgence garges-les-gonesse-centre', 'ouverture porte garges-les-gonesse-centre', 'serrurier 24h garges-les-gonesse-centre', 'dépannage serrure garges-les-gonesse-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Garges-lès-Gonesse-Centre"
    citySlug="garges-les-gonesse-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Garges-lès-Gonesse-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier garges-les-gonesse-centre", "serrurier urgence garges-les-gonesse-centre", "ouverture porte garges-les-gonesse-centre", "serrurier 24h garges-les-gonesse-centre", "dépannage serrure garges-les-gonesse-centre"]}
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