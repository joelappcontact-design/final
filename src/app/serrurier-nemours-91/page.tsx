import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nemours',
  department: '91',
  population: '13000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nemours 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nemours-91', 'serrurier urgence nemours-91', 'ouverture porte nemours-91', 'serrurier 24h nemours-91', 'dépannage serrure nemours-91']
};

export default function Page() {
  return <CityPage 
    cityName="Nemours"
    citySlug="nemours-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nemours - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nemours-91", "serrurier urgence nemours-91", "ouverture porte nemours-91", "serrurier 24h nemours-91", "dépannage serrure nemours-91"]}
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