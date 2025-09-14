import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bruyères-le-Châtel',
  department: '91',
  population: '4000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bruyères-le-Châtel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bruyeres-le-chatel', 'serrurier urgence bruyeres-le-chatel', 'ouverture porte bruyeres-le-chatel', 'serrurier 24h bruyeres-le-chatel', 'dépannage serrure bruyeres-le-chatel']
};

export default function Page() {
  return <CityPage 
    cityName="Bruyères-le-Châtel"
    citySlug="bruyeres-le-chatel"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bruyères-le-Châtel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bruyeres-le-chatel", "serrurier urgence bruyeres-le-chatel", "ouverture porte bruyeres-le-chatel", "serrurier 24h bruyeres-le-chatel", "dépannage serrure bruyeres-le-chatel"]}
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