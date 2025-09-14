import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pézarches',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pézarches 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pezarches-91', 'serrurier urgence pezarches-91', 'ouverture porte pezarches-91', 'serrurier 24h pezarches-91', 'dépannage serrure pezarches-91']
};

export default function Page() {
  return <CityPage 
    cityName="Pézarches"
    citySlug="pezarches-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pézarches - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pezarches-91", "serrurier urgence pezarches-91", "ouverture porte pezarches-91", "serrurier 24h pezarches-91", "dépannage serrure pezarches-91"]}
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