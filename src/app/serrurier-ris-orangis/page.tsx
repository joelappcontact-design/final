import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ris-Orangis',
  department: '91',
  population: '28000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ris-Orangis 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ris-orangis', 'serrurier urgence ris-orangis', 'ouverture porte ris-orangis', 'serrurier 24h ris-orangis', 'dépannage serrure ris-orangis']
};

export default function Page() {
  return <CityPage 
    cityName="Ris-Orangis"
    citySlug="ris-orangis"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ris-Orangis - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ris-orangis", "serrurier urgence ris-orangis", "ouverture porte ris-orangis", "serrurier 24h ris-orangis", "dépannage serrure ris-orangis"]}
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