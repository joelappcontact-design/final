import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Lumigny-Nesles-Ormeaux',
  department: '77',
  population: '1400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Lumigny-Nesles-Ormeaux 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lumigny-nesles-ormeaux', 'serrurier urgence lumigny-nesles-ormeaux', 'ouverture porte lumigny-nesles-ormeaux', 'serrurier 24h lumigny-nesles-ormeaux', 'dépannage serrure lumigny-nesles-ormeaux']
};

export default function Page() {
  return <CityPage 
    cityName="Lumigny-Nesles-Ormeaux"
    citySlug="lumigny-nesles-ormeaux"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Lumigny-Nesles-Ormeaux - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lumigny-nesles-ormeaux", "serrurier urgence lumigny-nesles-ormeaux", "ouverture porte lumigny-nesles-ormeaux", "serrurier 24h lumigny-nesles-ormeaux", "dépannage serrure lumigny-nesles-ormeaux"]}
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