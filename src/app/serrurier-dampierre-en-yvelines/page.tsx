import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Dampierre-en-Yvelines',
  department: '78',
  population: '1000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Dampierre-en-Yvelines 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dampierre-en-yvelines', 'serrurier urgence dampierre-en-yvelines', 'ouverture porte dampierre-en-yvelines', 'serrurier 24h dampierre-en-yvelines', 'dépannage serrure dampierre-en-yvelines']
};

export default function Page() {
  return <CityPage 
    cityName="Dampierre-en-Yvelines"
    citySlug="dampierre-en-yvelines"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Dampierre-en-Yvelines - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dampierre-en-yvelines", "serrurier urgence dampierre-en-yvelines", "ouverture porte dampierre-en-yvelines", "serrurier 24h dampierre-en-yvelines", "dépannage serrure dampierre-en-yvelines"]}
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