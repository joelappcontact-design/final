import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Dammartin-sur-Tigeaux',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Dammartin-sur-Tigeaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dammartin-sur-tigeaux', 'serrurier urgence dammartin-sur-tigeaux', 'ouverture porte dammartin-sur-tigeaux', 'serrurier 24h dammartin-sur-tigeaux', 'dépannage serrure dammartin-sur-tigeaux']
};

export default function Page() {
  return <CityPage 
    cityName="Dammartin-sur-Tigeaux"
    citySlug="dammartin-sur-tigeaux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Dammartin-sur-Tigeaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dammartin-sur-tigeaux", "serrurier urgence dammartin-sur-tigeaux", "ouverture porte dammartin-sur-tigeaux", "serrurier 24h dammartin-sur-tigeaux", "dépannage serrure dammartin-sur-tigeaux"]}
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