import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Follainville-Dennemont',
  department: '78',
  population: '2600',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Follainville-Dennemont 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier follainville-dennemont', 'serrurier urgence follainville-dennemont', 'ouverture porte follainville-dennemont', 'serrurier 24h follainville-dennemont', 'dépannage serrure follainville-dennemont']
};

export default function Page() {
  return <CityPage 
    cityName="Follainville-Dennemont"
    citySlug="follainville-dennemont"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Follainville-Dennemont - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier follainville-dennemont", "serrurier urgence follainville-dennemont", "ouverture porte follainville-dennemont", "serrurier 24h follainville-dennemont", "dépannage serrure follainville-dennemont"]}
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