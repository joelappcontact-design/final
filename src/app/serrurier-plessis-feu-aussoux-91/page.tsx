import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Plessis-Feu-Aussoux',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Plessis-Feu-Aussoux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier plessis-feu-aussoux-91', 'serrurier urgence plessis-feu-aussoux-91', 'ouverture porte plessis-feu-aussoux-91', 'serrurier 24h plessis-feu-aussoux-91', 'dépannage serrure plessis-feu-aussoux-91']
};

export default function Page() {
  return <CityPage 
    cityName="Plessis-Feu-Aussoux"
    citySlug="plessis-feu-aussoux-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Plessis-Feu-Aussoux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier plessis-feu-aussoux-91", "serrurier urgence plessis-feu-aussoux-91", "ouverture porte plessis-feu-aussoux-91", "serrurier 24h plessis-feu-aussoux-91", "dépannage serrure plessis-feu-aussoux-91"]}
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