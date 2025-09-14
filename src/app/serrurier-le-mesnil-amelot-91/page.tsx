import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Mesnil-Amelot',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Mesnil-Amelot 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-mesnil-amelot-91', 'serrurier urgence le-mesnil-amelot-91', 'ouverture porte le-mesnil-amelot-91', 'serrurier 24h le-mesnil-amelot-91', 'dépannage serrure le-mesnil-amelot-91']
};

export default function Page() {
  return <CityPage 
    cityName="Le Mesnil-Amelot"
    citySlug="le-mesnil-amelot-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Mesnil-Amelot - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-mesnil-amelot-91", "serrurier urgence le-mesnil-amelot-91", "ouverture porte le-mesnil-amelot-91", "serrurier 24h le-mesnil-amelot-91", "dépannage serrure le-mesnil-amelot-91"]}
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