import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chailly-en-Bière',
  department: '77',
  population: '2200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chailly-en-Bière 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chailly-en-biere', 'serrurier urgence chailly-en-biere', 'ouverture porte chailly-en-biere', 'serrurier 24h chailly-en-biere', 'dépannage serrure chailly-en-biere']
};

export default function Page() {
  return <CityPage 
    cityName="Chailly-en-Bière"
    citySlug="chailly-en-biere"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chailly-en-Bière - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chailly-en-biere", "serrurier urgence chailly-en-biere", "ouverture porte chailly-en-biere", "serrurier 24h chailly-en-biere", "dépannage serrure chailly-en-biere"]}
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