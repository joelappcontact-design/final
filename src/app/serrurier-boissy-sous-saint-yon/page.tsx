import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Boissy-sous-Saint-Yon',
  department: '91',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Boissy-sous-Saint-Yon 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier boissy-sous-saint-yon', 'serrurier urgence boissy-sous-saint-yon', 'ouverture porte boissy-sous-saint-yon', 'serrurier 24h boissy-sous-saint-yon', 'dépannage serrure boissy-sous-saint-yon']
};

export default function Page() {
  return <CityPage 
    cityName="Boissy-sous-Saint-Yon"
    citySlug="boissy-sous-saint-yon"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Boissy-sous-Saint-Yon - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier boissy-sous-saint-yon", "serrurier urgence boissy-sous-saint-yon", "ouverture porte boissy-sous-saint-yon", "serrurier 24h boissy-sous-saint-yon", "dépannage serrure boissy-sous-saint-yon"]}
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