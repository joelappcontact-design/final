import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bois-Herpin',
  department: '91',
  population: '100',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bois-Herpin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bois-herpin', 'serrurier urgence bois-herpin', 'ouverture porte bois-herpin', 'serrurier 24h bois-herpin', 'dépannage serrure bois-herpin']
};

export default function Page() {
  return <CityPage 
    cityName="Bois-Herpin"
    citySlug="bois-herpin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bois-Herpin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bois-herpin", "serrurier urgence bois-herpin", "ouverture porte bois-herpin", "serrurier 24h bois-herpin", "dépannage serrure bois-herpin"]}
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