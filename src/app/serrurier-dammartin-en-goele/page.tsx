import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Dammartin-en-Goële',
  department: '77',
  population: '8000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Dammartin-en-Goële 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier dammartin-en-goele', 'serrurier urgence dammartin-en-goele', 'ouverture porte dammartin-en-goele', 'serrurier 24h dammartin-en-goele', 'dépannage serrure dammartin-en-goele']
};

export default function Page() {
  return <CityPage 
    cityName="Dammartin-en-Goële"
    citySlug="dammartin-en-goele"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Dammartin-en-Goële - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier dammartin-en-goele", "serrurier urgence dammartin-en-goele", "ouverture porte dammartin-en-goele", "serrurier 24h dammartin-en-goele", "dépannage serrure dammartin-en-goele"]}
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