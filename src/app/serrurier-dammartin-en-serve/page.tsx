import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Dammartin-en-Serve',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Dammartin-en-Serve 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dammartin-en-serve', 'serrurier urgence dammartin-en-serve', 'ouverture porte dammartin-en-serve', 'serrurier 24h dammartin-en-serve', 'dépannage serrure dammartin-en-serve']
};

export default function Page() {
  return <CityPage 
    cityName="Dammartin-en-Serve"
    citySlug="dammartin-en-serve"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Dammartin-en-Serve - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dammartin-en-serve", "serrurier urgence dammartin-en-serve", "ouverture porte dammartin-en-serve", "serrurier 24h dammartin-en-serve", "dépannage serrure dammartin-en-serve"]}
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