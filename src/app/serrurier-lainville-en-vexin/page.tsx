import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Lainville-en-Vexin',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Lainville-en-Vexin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lainville-en-vexin', 'serrurier urgence lainville-en-vexin', 'ouverture porte lainville-en-vexin', 'serrurier 24h lainville-en-vexin', 'dépannage serrure lainville-en-vexin']
};

export default function Page() {
  return <CityPage 
    cityName="Lainville-en-Vexin"
    citySlug="lainville-en-vexin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Lainville-en-Vexin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lainville-en-vexin", "serrurier urgence lainville-en-vexin", "ouverture porte lainville-en-vexin", "serrurier 24h lainville-en-vexin", "dépannage serrure lainville-en-vexin"]}
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