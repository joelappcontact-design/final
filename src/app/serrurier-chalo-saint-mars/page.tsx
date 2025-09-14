import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chalo-Saint-Mars',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chalo-Saint-Mars 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chalo-saint-mars', 'serrurier urgence chalo-saint-mars', 'ouverture porte chalo-saint-mars', 'serrurier 24h chalo-saint-mars', 'dépannage serrure chalo-saint-mars']
};

export default function Page() {
  return <CityPage 
    cityName="Chalo-Saint-Mars"
    citySlug="chalo-saint-mars"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chalo-Saint-Mars - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chalo-saint-mars", "serrurier urgence chalo-saint-mars", "ouverture porte chalo-saint-mars", "serrurier 24h chalo-saint-mars", "dépannage serrure chalo-saint-mars"]}
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