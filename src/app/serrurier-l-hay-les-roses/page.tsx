import CityPage from '@/components/CityPage';

const cityData = {
  name: 'L\'Haÿ-les-Roses',
  department: '91',
  population: '32000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence L\'Haÿ-les-Roses 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier l-hay-les-roses', 'serrurier urgence l-hay-les-roses', 'ouverture porte l-hay-les-roses', 'serrurier 24h l-hay-les-roses', 'dépannage serrure l-hay-les-roses']
};

export default function Page() {
  return <CityPage 
    cityName="L\'Haÿ-les-Roses"
    citySlug="l-hay-les-roses"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="L\'Haÿ-les-Roses - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier l-hay-les-roses", "serrurier urgence l-hay-les-roses", "ouverture porte l-hay-les-roses", "serrurier 24h l-hay-les-roses", "dépannage serrure l-hay-les-roses"]}
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