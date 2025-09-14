import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Gretz-Armainvilliers',
  department: '77',
  population: '9000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Gretz-Armainvilliers 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier gretz-armainvilliers', 'serrurier urgence gretz-armainvilliers', 'ouverture porte gretz-armainvilliers', 'serrurier 24h gretz-armainvilliers', 'dépannage serrure gretz-armainvilliers']
};

export default function Page() {
  return <CityPage 
    cityName="Gretz-Armainvilliers"
    citySlug="gretz-armainvilliers"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Gretz-Armainvilliers - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier gretz-armainvilliers", "serrurier urgence gretz-armainvilliers", "ouverture porte gretz-armainvilliers", "serrurier 24h gretz-armainvilliers", "dépannage serrure gretz-armainvilliers"]}
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