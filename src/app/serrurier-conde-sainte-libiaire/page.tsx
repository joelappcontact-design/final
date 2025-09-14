import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Condé-Sainte-Libiaire',
  department: '77',
  population: '1500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Condé-Sainte-Libiaire 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier conde-sainte-libiaire', 'serrurier urgence conde-sainte-libiaire', 'ouverture porte conde-sainte-libiaire', 'serrurier 24h conde-sainte-libiaire', 'dépannage serrure conde-sainte-libiaire']
};

export default function Page() {
  return <CityPage 
    cityName="Condé-Sainte-Libiaire"
    citySlug="conde-sainte-libiaire"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Condé-Sainte-Libiaire - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier conde-sainte-libiaire", "serrurier urgence conde-sainte-libiaire", "ouverture porte conde-sainte-libiaire", "serrurier 24h conde-sainte-libiaire", "dépannage serrure conde-sainte-libiaire"]}
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