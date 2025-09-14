import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Buno-Bonnevaux',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Buno-Bonnevaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier buno-bonnevaux', 'serrurier urgence buno-bonnevaux', 'ouverture porte buno-bonnevaux', 'serrurier 24h buno-bonnevaux', 'dépannage serrure buno-bonnevaux']
};

export default function Page() {
  return <CityPage 
    cityName="Buno-Bonnevaux"
    citySlug="buno-bonnevaux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Buno-Bonnevaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier buno-bonnevaux", "serrurier urgence buno-bonnevaux", "ouverture porte buno-bonnevaux", "serrurier 24h buno-bonnevaux", "dépannage serrure buno-bonnevaux"]}
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