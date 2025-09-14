import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Marolles-en-Hurepoix',
  department: '91',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Marolles-en-Hurepoix 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier marolles-en-hurepoix', 'serrurier urgence marolles-en-hurepoix', 'ouverture porte marolles-en-hurepoix', 'serrurier 24h marolles-en-hurepoix', 'dépannage serrure marolles-en-hurepoix']
};

export default function Page() {
  return <CityPage 
    cityName="Marolles-en-Hurepoix"
    citySlug="marolles-en-hurepoix"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Marolles-en-Hurepoix - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier marolles-en-hurepoix", "serrurier urgence marolles-en-hurepoix", "ouverture porte marolles-en-hurepoix", "serrurier 24h marolles-en-hurepoix", "dépannage serrure marolles-en-hurepoix"]}
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