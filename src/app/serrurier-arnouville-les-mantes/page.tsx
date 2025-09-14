import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Arnouville-lès-Mantes',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Arnouville-lès-Mantes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier arnouville-les-mantes', 'serrurier urgence arnouville-les-mantes', 'ouverture porte arnouville-les-mantes', 'serrurier 24h arnouville-les-mantes', 'dépannage serrure arnouville-les-mantes']
};

export default function Page() {
  return <CityPage 
    cityName="Arnouville-lès-Mantes"
    citySlug="arnouville-les-mantes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Arnouville-lès-Mantes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier arnouville-les-mantes", "serrurier urgence arnouville-les-mantes", "ouverture porte arnouville-les-mantes", "serrurier 24h arnouville-les-mantes", "dépannage serrure arnouville-les-mantes"]}
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