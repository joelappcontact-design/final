import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mauperthuis',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mauperthuis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mauperthuis', 'serrurier urgence mauperthuis', 'ouverture porte mauperthuis', 'serrurier 24h mauperthuis', 'dépannage serrure mauperthuis']
};

export default function Page() {
  return <CityPage 
    cityName="Mauperthuis"
    citySlug="mauperthuis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mauperthuis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mauperthuis", "serrurier urgence mauperthuis", "ouverture porte mauperthuis", "serrurier 24h mauperthuis", "dépannage serrure mauperthuis"]}
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