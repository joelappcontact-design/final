import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Brueil-en-Vexin-Centre',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Brueil-en-Vexin-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier brueil-en-vexin-centre', 'serrurier urgence brueil-en-vexin-centre', 'ouverture porte brueil-en-vexin-centre', 'serrurier 24h brueil-en-vexin-centre', 'dépannage serrure brueil-en-vexin-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Brueil-en-Vexin-Centre"
    citySlug="brueil-en-vexin-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Brueil-en-Vexin-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier brueil-en-vexin-centre", "serrurier urgence brueil-en-vexin-centre", "ouverture porte brueil-en-vexin-centre", "serrurier 24h brueil-en-vexin-centre", "dépannage serrure brueil-en-vexin-centre"]}
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