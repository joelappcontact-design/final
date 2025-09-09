import { Metadata } from 'next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FAQ from '@/components/FAQ';
import CallCTA from '@/components/CallCTA';
import SchemaFAQ from '@/components/SchemaFAQ';
import { config } from '@/lib/config';
import { FAQ as FAQType } from '@/types';

export const metadata: Metadata = {
  title: 'FAQ Serrurier d\'urgence - Questions fréquentes',
  description: `Questions fréquentes sur nos services de serrurier d'urgence ${config.primaryCity}. Tarifs, délais d'intervention, modes de paiement, garanties.`,
  keywords: [
    'faq serrurier',
    'questions serrurier',
    'serrurier urgence',
    'tarifs serrurier',
    'intervention serrurier',
    'garantie serrurier'
  ],
  openGraph: {
    title: 'FAQ Serrurier d\'urgence - Questions fréquentes',
    description: `Questions fréquentes sur nos services de serrurier d'urgence ${config.primaryCity}.`,
  },
};

// FAQ complète
const faqData: FAQType[] = [
  {
    id: 'faq-1',
    question: 'En combien de temps intervenez-vous ?',
    answer: `Nous intervenons en moyenne en ${config.slaMinutes} selon le trafic. En cas d'urgence extrême, nous nous efforçons d'arriver encore plus rapidement. Nos artisans sont répartis dans toute la zone d'intervention pour optimiser les délais.`,
    category: 'service',
  },
  {
    id: 'faq-3',
    question: 'Puis-je payer par carte ?',
    answer: 'Oui, nous acceptons tous les modes de paiement : carte bancaire, espèces, virement bancaire et chèque. La facture est envoyée automatiquement par email après l\'intervention. Vous recevrez également un reçu papier si vous le souhaitez.',
    category: 'pricing',
  },
  {
    id: 'faq-4',
    question: 'Intervenez-vous la nuit et les jours fériés ?',
    answer: 'Oui, nous intervenons 24h/24, 7j/7, y compris les nuits, week-ends et jours fériés. Les tarifs restent identiques quelle que soit l\'heure. Nos artisans sont disponibles en permanence pour répondre à vos urgences.',
    category: 'emergency',
  },
  {
    id: 'faq-5',
    question: 'Vos artisans sont-ils certifiés ?',
    answer: 'Tous nos artisans sont certifiés, vérifiés et assurés. Nous effectuons des vérifications régulières de leurs compétences et de leur réputation. Chaque intervention est couverte par notre assurance responsabilité civile.',
    category: 'general',
  },
  {
    id: 'faq-6',
    question: 'Que faire en cas d\'arnaque ?',
    answer: 'Nos prix sont fixes et affichés à l\'avance. Pas de cash imposé, facture automatique. En cas de problème, contactez-nous immédiatement. Nous avons une politique de remboursement si l\'intervention ne correspond pas à nos standards.',
    category: 'general',
  },
  {
    id: 'faq-7',
    question: 'Proposez-vous une garantie ?',
    answer: 'Oui, toutes nos interventions sont garanties. La durée de garantie varie selon le type d\'intervention : 30 jours pour les ouvertures, 1 an pour les changements de cylindre, 2 ans pour les installations de portes sécurisées.',
    category: 'general',
  },
  {
    id: 'faq-8',
    question: 'Intervenez-vous dans toutes les villes ?',
    answer: `Nous intervenons dans ${config.primaryCity} et ses environs. Notre zone d'intervention couvre les principales communes de la région. Consultez notre page zones pour voir la liste complète des villes desservies.`,
    category: 'service',
  },
  {
    id: 'faq-9',
    question: 'Que faire si je suis bloqué à l\'extérieur ?',
    answer: 'Appelez-nous immédiatement au ' + config.phone + '. Décrivez votre situation et votre localisation. Nous vous donnerons un délai d\'intervention précis et vous tiendrons informé de l\'arrivée de l\'artisan.',
    category: 'emergency',
  },
  {
    id: 'faq-10',
    question: 'Puis-je avoir un devis avant l\'intervention ?',
    answer: 'Nos prix sont fixes et affichés sur notre site. Pour les interventions complexes, nous pouvons vous donner une estimation par téléphone. Le prix final ne dépassera jamais le tarif affiché pour le type d\'intervention concerné.',
    category: 'pricing',
  },
  {
    id: 'faq-11',
    question: 'Que se passe-t-il si vous ne pouvez pas ouvrir ma porte ?',
    answer: 'Dans de très rares cas, si nous ne pouvons pas ouvrir votre porte sans la détruire, nous vous proposerons des alternatives (changement de serrure, perçage, etc.). Vous ne payez que si nous réussissons à vous donner accès à votre domicile.',
    category: 'service',
  },
  {
    id: 'faq-12',
    question: 'Proposez-vous des services de prévention ?',
    answer: 'Oui, nous proposons des conseils de sécurité et des vérifications préventives. Nous pouvons également installer des systèmes de sécurité supplémentaires et vous conseiller sur les meilleures pratiques pour éviter les blocages.',
    category: 'service',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-20">
      <SchemaFAQ faqs={faqData} />
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
            Questions fréquentes
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto text-shadow">
            Trouvez les réponses à vos questions sur nos services de serrurier d'urgence
          </p>
          
          <CallCTA variant="primary" size="lg" showWhatsApp={true} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <FAQ faqs={faqData} />
        </div>
      </section>

      {/* Catégories FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12 text-shadow">
            Par catégorie
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <h3 className="text-xl font-bold text-white mb-4">Service</h3>
              <p className="text-white/80 text-sm mb-4">
                Questions sur nos interventions et délais
              </p>
              <div className="text-yellow-400 text-sm font-medium">
                {faqData.filter(faq => faq.category === 'service').length} questions
              </div>
            </div>
            
            <div className="card text-center">
              <h3 className="text-xl font-bold text-white mb-4">Tarifs</h3>
              <p className="text-white/80 text-sm mb-4">
                Questions sur nos prix et modes de paiement
              </p>
              <div className="text-yellow-400 text-sm font-medium">
                {faqData.filter(faq => faq.category === 'pricing').length} questions
              </div>
            </div>
            
            <div className="card text-center">
              <h3 className="text-xl font-bold text-white mb-4">Urgence</h3>
              <p className="text-white/80 text-sm mb-4">
                Questions sur les interventions d'urgence
              </p>
              <div className="text-yellow-400 text-sm font-medium">
                {faqData.filter(faq => faq.category === 'emergency').length} questions
              </div>
            </div>
            
            <div className="card text-center">
              <h3 className="text-xl font-bold text-white mb-4">Général</h3>
              <p className="text-white/80 text-sm mb-4">
                Questions générales sur nos services
              </p>
              <div className="text-yellow-400 text-sm font-medium">
                {faqData.filter(faq => faq.category === 'general').length} questions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-shadow">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contactez-nous directement, nous répondons à toutes vos questions
            </p>
            <CallCTA variant="primary" size="lg" showWhatsApp={true} />
          </div>
        </div>
      </section>
    </div>
  );
}
