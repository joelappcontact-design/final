import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Lieusaint',
  department: '77',
  population: '9500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Lieusaint 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lieusaint', 'serrurier urgence lieusaint', 'ouverture porte lieusaint', 'serrurier 24h lieusaint', 'dépannage serrure lieusaint']
};

export default function Page() {
  return <CityPage 
    cityName="Lieusaint"
    citySlug="lieusaint"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Lieusaint - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lieusaint", "serrurier urgence lieusaint", "ouverture porte lieusaint", "serrurier 24h lieusaint", "dépannage serrure lieusaint"]}
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