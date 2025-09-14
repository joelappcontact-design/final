import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Milon-la-Chapelle',
  department: '78',
  population: '800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Milon-la-Chapelle 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier milon-la-chapelle', 'serrurier urgence milon-la-chapelle', 'ouverture porte milon-la-chapelle', 'serrurier 24h milon-la-chapelle', 'dépannage serrure milon-la-chapelle']
};

export default function Page() {
  return <CityPage 
    cityName="Milon-la-Chapelle"
    citySlug="milon-la-chapelle"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Milon-la-Chapelle - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier milon-la-chapelle", "serrurier urgence milon-la-chapelle", "ouverture porte milon-la-chapelle", "serrurier 24h milon-la-chapelle", "dépannage serrure milon-la-chapelle"]}
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