import CityPage from '@/components/CityPage';

const cityData = {
  name: 'La Ferté-sous-Jouarre',
  department: '77',
  population: '9000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence La Ferté-sous-Jouarre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier la-ferte-sous-jouarre', 'serrurier urgence la-ferte-sous-jouarre', 'ouverture porte la-ferte-sous-jouarre', 'serrurier 24h la-ferte-sous-jouarre', 'dépannage serrure la-ferte-sous-jouarre']
};

export default function Page() {
  return <CityPage 
    cityName="La Ferté-sous-Jouarre"
    citySlug="la-ferte-sous-jouarre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="La Ferté-sous-Jouarre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier la-ferte-sous-jouarre", "serrurier urgence la-ferte-sous-jouarre", "ouverture porte la-ferte-sous-jouarre", "serrurier 24h la-ferte-sous-jouarre", "dépannage serrure la-ferte-sous-jouarre"]}
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