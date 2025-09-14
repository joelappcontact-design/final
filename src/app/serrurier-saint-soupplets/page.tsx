import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Soupplets',
  department: '77',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Soupplets 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-soupplets', 'serrurier urgence saint-soupplets', 'ouverture porte saint-soupplets', 'serrurier 24h saint-soupplets', 'dépannage serrure saint-soupplets']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Soupplets"
    citySlug="saint-soupplets"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Soupplets - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-soupplets", "serrurier urgence saint-soupplets", "ouverture porte saint-soupplets", "serrurier 24h saint-soupplets", "dépannage serrure saint-soupplets"]}
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