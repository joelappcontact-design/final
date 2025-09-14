import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Grisy-sur-Seine',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Grisy-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier grisy-sur-seine-91', 'serrurier urgence grisy-sur-seine-91', 'ouverture porte grisy-sur-seine-91', 'serrurier 24h grisy-sur-seine-91', 'dépannage serrure grisy-sur-seine-91']
};

export default function Page() {
  return <CityPage 
    cityName="Grisy-sur-Seine"
    citySlug="grisy-sur-seine-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Grisy-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier grisy-sur-seine-91", "serrurier urgence grisy-sur-seine-91", "ouverture porte grisy-sur-seine-91", "serrurier 24h grisy-sur-seine-91", "dépannage serrure grisy-sur-seine-91"]}
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