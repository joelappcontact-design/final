import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ormesson-sur-Marne',
  department: '91',
  population: '10000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ormesson-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ormesson-sur-marne', 'serrurier urgence ormesson-sur-marne', 'ouverture porte ormesson-sur-marne', 'serrurier 24h ormesson-sur-marne', 'dépannage serrure ormesson-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Ormesson-sur-Marne"
    citySlug="ormesson-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ormesson-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ormesson-sur-marne", "serrurier urgence ormesson-sur-marne", "ouverture porte ormesson-sur-marne", "serrurier 24h ormesson-sur-marne", "dépannage serrure ormesson-sur-marne"]}
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