import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Belle-Île-en-Mer',
  department: '78',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Belle-Île-en-Mer 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier belle-ile-en-mer', 'serrurier urgence belle-ile-en-mer', 'ouverture porte belle-ile-en-mer', 'serrurier 24h belle-ile-en-mer', 'dépannage serrure belle-ile-en-mer']
};

export default function Page() {
  return <CityPage 
    cityName="Belle-Île-en-Mer"
    citySlug="belle-ile-en-mer"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Belle-Île-en-Mer - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier belle-ile-en-mer", "serrurier urgence belle-ile-en-mer", "ouverture porte belle-ile-en-mer", "serrurier 24h belle-ile-en-mer", "dépannage serrure belle-ile-en-mer"]}
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