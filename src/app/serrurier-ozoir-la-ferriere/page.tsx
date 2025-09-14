import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ozoir-la-Ferrière',
  department: '92',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ozoir-la-Ferrière 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ozoir-la-ferriere', 'serrurier urgence ozoir-la-ferriere', 'ouverture porte ozoir-la-ferriere', 'serrurier 24h ozoir-la-ferriere', 'dépannage serrure ozoir-la-ferriere']
};

export default function Page() {
  return <CityPage 
    cityName="Ozoir-la-Ferrière"
    citySlug="ozoir-la-ferriere"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ozoir-la-Ferrière - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ozoir-la-ferriere", "serrurier urgence ozoir-la-ferriere", "ouverture porte ozoir-la-ferriere", "serrurier 24h ozoir-la-ferriere", "dépannage serrure ozoir-la-ferriere"]}
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