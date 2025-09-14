import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Meulan-en-Yvelines-Centre',
  department: '78',
  population: '9000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Meulan-en-Yvelines-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier meulan-en-yvelines-centre', 'serrurier urgence meulan-en-yvelines-centre', 'ouverture porte meulan-en-yvelines-centre', 'serrurier 24h meulan-en-yvelines-centre', 'dépannage serrure meulan-en-yvelines-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Meulan-en-Yvelines-Centre"
    citySlug="meulan-en-yvelines-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Meulan-en-Yvelines-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier meulan-en-yvelines-centre", "serrurier urgence meulan-en-yvelines-centre", "ouverture porte meulan-en-yvelines-centre", "serrurier 24h meulan-en-yvelines-centre", "dépannage serrure meulan-en-yvelines-centre"]}
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