import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Perdreauville',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Perdreauville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier perdreauville', 'serrurier urgence perdreauville', 'ouverture porte perdreauville', 'serrurier 24h perdreauville', 'dépannage serrure perdreauville']
};

export default function Page() {
  return <CityPage 
    cityName="Perdreauville"
    citySlug="perdreauville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Perdreauville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier perdreauville", "serrurier urgence perdreauville", "ouverture porte perdreauville", "serrurier 24h perdreauville", "dépannage serrure perdreauville"]}
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