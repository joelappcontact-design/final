import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Aulnay-sur-Mauldre',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Aulnay-sur-Mauldre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier aulnay-sur-mauldre', 'serrurier urgence aulnay-sur-mauldre', 'ouverture porte aulnay-sur-mauldre', 'serrurier 24h aulnay-sur-mauldre', 'dépannage serrure aulnay-sur-mauldre']
};

export default function Page() {
  return <CityPage 
    cityName="Aulnay-sur-Mauldre"
    citySlug="aulnay-sur-mauldre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Aulnay-sur-Mauldre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier aulnay-sur-mauldre", "serrurier urgence aulnay-sur-mauldre", "ouverture porte aulnay-sur-mauldre", "serrurier 24h aulnay-sur-mauldre", "dépannage serrure aulnay-sur-mauldre"]}
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