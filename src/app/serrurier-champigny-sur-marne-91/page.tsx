import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Champigny-sur-Marne',
  department: '91',
  population: '76000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Champigny-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier champigny-sur-marne-91', 'serrurier urgence champigny-sur-marne-91', 'ouverture porte champigny-sur-marne-91', 'serrurier 24h champigny-sur-marne-91', 'dépannage serrure champigny-sur-marne-91']
};

export default function Page() {
  return <CityPage 
    cityName="Champigny-sur-Marne"
    citySlug="champigny-sur-marne-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Champigny-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier champigny-sur-marne-91", "serrurier urgence champigny-sur-marne-91", "ouverture porte champigny-sur-marne-91", "serrurier 24h champigny-sur-marne-91", "dépannage serrure champigny-sur-marne-91"]}
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