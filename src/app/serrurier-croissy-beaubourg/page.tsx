import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Croissy-Beaubourg',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Croissy-Beaubourg 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier croissy-beaubourg', 'serrurier urgence croissy-beaubourg', 'ouverture porte croissy-beaubourg', 'serrurier 24h croissy-beaubourg', 'dépannage serrure croissy-beaubourg']
};

export default function Page() {
  return <CityPage 
    cityName="Croissy-Beaubourg"
    citySlug="croissy-beaubourg"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Croissy-Beaubourg - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier croissy-beaubourg", "serrurier urgence croissy-beaubourg", "ouverture porte croissy-beaubourg", "serrurier 24h croissy-beaubourg", "dépannage serrure croissy-beaubourg"]}
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