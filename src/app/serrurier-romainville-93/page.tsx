import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Romainville',
  department: '93',
  population: '28000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Romainville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier romainville-93', 'serrurier urgence romainville-93', 'ouverture porte romainville-93', 'serrurier 24h romainville-93', 'dépannage serrure romainville-93']
};

export default function Page() {
  return <CityPage 
    cityName="Romainville"
    citySlug="romainville-93"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Romainville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier romainville-93", "serrurier urgence romainville-93", "ouverture porte romainville-93", "serrurier 24h romainville-93", "dépannage serrure romainville-93"]}
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