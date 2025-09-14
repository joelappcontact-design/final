import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ferté-Alais',
  department: '91',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ferté-Alais 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ferte-alais', 'serrurier urgence ferte-alais', 'ouverture porte ferte-alais', 'serrurier 24h ferte-alais', 'dépannage serrure ferte-alais']
};

export default function Page() {
  return <CityPage 
    cityName="Ferté-Alais"
    citySlug="ferte-alais"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ferté-Alais - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ferte-alais", "serrurier urgence ferte-alais", "ouverture porte ferte-alais", "serrurier 24h ferte-alais", "dépannage serrure ferte-alais"]}
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