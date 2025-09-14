import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Dammarie-lès-Lys',
  department: '77',
  population: '22000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Dammarie-lès-Lys 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dammarie-les-lys', 'serrurier urgence dammarie-les-lys', 'ouverture porte dammarie-les-lys', 'serrurier 24h dammarie-les-lys', 'dépannage serrure dammarie-les-lys']
};

export default function Page() {
  return <CityPage 
    cityName="Dammarie-lès-Lys"
    citySlug="dammarie-les-lys"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Dammarie-lès-Lys - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dammarie-les-lys", "serrurier urgence dammarie-les-lys", "ouverture porte dammarie-les-lys", "serrurier 24h dammarie-les-lys", "dépannage serrure dammarie-les-lys"]}
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