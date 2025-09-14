import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Brueil-en-Vexin',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Brueil-en-Vexin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier brueil-en-vexin', 'serrurier urgence brueil-en-vexin', 'ouverture porte brueil-en-vexin', 'serrurier 24h brueil-en-vexin', 'dépannage serrure brueil-en-vexin']
};

export default function Page() {
  return <CityPage 
    cityName="Brueil-en-Vexin"
    citySlug="brueil-en-vexin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Brueil-en-Vexin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier brueil-en-vexin", "serrurier urgence brueil-en-vexin", "ouverture porte brueil-en-vexin", "serrurier 24h brueil-en-vexin", "dépannage serrure brueil-en-vexin"]}
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