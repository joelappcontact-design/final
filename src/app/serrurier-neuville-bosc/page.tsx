import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Neuville-Bosc',
  department: '95',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Neuville-Bosc 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier neuville-bosc', 'serrurier urgence neuville-bosc', 'ouverture porte neuville-bosc', 'serrurier 24h neuville-bosc', 'dépannage serrure neuville-bosc']
};

export default function Page() {
  return <CityPage 
    cityName="Neuville-Bosc"
    citySlug="neuville-bosc"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Neuville-Bosc - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier neuville-bosc", "serrurier urgence neuville-bosc", "ouverture porte neuville-bosc", "serrurier 24h neuville-bosc", "dépannage serrure neuville-bosc"]}
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