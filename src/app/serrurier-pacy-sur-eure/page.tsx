import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pacy-sur-Eure',
  department: '78',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pacy-sur-Eure 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pacy-sur-eure', 'serrurier urgence pacy-sur-eure', 'ouverture porte pacy-sur-eure', 'serrurier 24h pacy-sur-eure', 'dépannage serrure pacy-sur-eure']
};

export default function Page() {
  return <CityPage 
    cityName="Pacy-sur-Eure"
    citySlug="pacy-sur-eure"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pacy-sur-Eure - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pacy-sur-eure", "serrurier urgence pacy-sur-eure", "ouverture porte pacy-sur-eure", "serrurier 24h pacy-sur-eure", "dépannage serrure pacy-sur-eure"]}
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