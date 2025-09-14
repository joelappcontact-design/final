import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Limetz-Villez',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Limetz-Villez 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier limetz-villez', 'serrurier urgence limetz-villez', 'ouverture porte limetz-villez', 'serrurier 24h limetz-villez', 'dépannage serrure limetz-villez']
};

export default function Page() {
  return <CityPage 
    cityName="Limetz-Villez"
    citySlug="limetz-villez"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Limetz-Villez - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier limetz-villez", "serrurier urgence limetz-villez", "ouverture porte limetz-villez", "serrurier 24h limetz-villez", "dépannage serrure limetz-villez"]}
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