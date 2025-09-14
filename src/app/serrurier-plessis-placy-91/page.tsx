import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Plessis-Placy',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Plessis-Placy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier plessis-placy-91', 'serrurier urgence plessis-placy-91', 'ouverture porte plessis-placy-91', 'serrurier 24h plessis-placy-91', 'dépannage serrure plessis-placy-91']
};

export default function Page() {
  return <CityPage 
    cityName="Plessis-Placy"
    citySlug="plessis-placy-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Plessis-Placy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier plessis-placy-91", "serrurier urgence plessis-placy-91", "ouverture porte plessis-placy-91", "serrurier 24h plessis-placy-91", "dépannage serrure plessis-placy-91"]}
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