'use client';

import { useEffect } from 'react';
import { Clock, Shield, Star, CheckCircle, MapPin, Phone, MessageCircle } from 'lucide-react';
import CallButton from '@/components/CallButton';
import PhoneButton from '@/components/PhoneButton';
import CityGrid from '@/components/CityGrid';
import FAQ from '@/components/FAQ';
import TestimonialCard from '@/components/TestimonialCard';
import PartnersMarquee from '@/components/PartnersMarquee';
import StatsCounter from '@/components/StatsCounter';
import ProcessSteps from '@/components/ProcessSteps';
import TeamSection from '@/components/TeamSection';
import { config } from '@/lib/config';
import { initializeTracking, saveGclid } from '@/lib/tracking';
import { Testimonial, FAQ as FAQType } from '@/types';

// Témoignages clients
const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Marie L.',
    rating: 5,
    comment: 'Intervention très rapide, en 30 minutes exactement. Prix respecté, aucun dégât. Je recommande vivement !',
    location: 'Paris',
    date: 'Il y a 2 jours',
  },
  {
    id: 'testimonial-2',
    name: 'Jean-Pierre M.',
    rating: 5,
    comment: 'Artisan très professionnel, intervention rapide et efficace. Plus de peur des arnaques avec ces serruriers !',
    location: 'Neuilly-sur-Seine',
    date: 'Il y a 1 semaine',
  },
  {
    id: 'testimonial-3',
    name: 'Sophie D.',
    rating: 5,
    comment: 'Intervention de nuit, très respectueux. Le prix était exactement celui annoncé. Service impeccable.',
    location: 'Boulogne-Billancourt',
    date: 'Il y a 3 jours',
  },
];

// FAQ
const faqData: FAQType[] = [
  {
    id: 'faq-1',
    question: 'En combien de temps intervenez-vous ?',
    answer: `Nous intervenons en moyenne en ${config.slaMinutes} selon le trafic. En cas d'urgence, nous nous efforçons d'arriver encore plus rapidement.`,
    category: 'service',
  },
  {
    id: 'faq-2',
    question: 'Quels sont vos tarifs ?',
    answer: 'Nos tarifs sont fixes et transparents : Ouverture simple à partir de 39€, ouverture complexe 89€, changement de cylindre 49€. Aucun frais caché.',
    category: 'pricing',
  },
  {
    id: 'faq-3',
    question: 'Êtes-vous disponibles 24h/24 ?',
    answer: 'Oui, nous intervenons 24h/24, 7j/7, y compris les weekends et jours fériés. Votre urgence est notre priorité.',
    category: 'service',
  },
  {
    id: 'faq-4',
    question: 'Vos artisans sont-ils certifiés ?',
    answer: 'Absolument ! Tous nos artisans sont certifiés, assurés et passent des vérifications de sécurité rigoureuses.',
    category: 'service',
  },
  {
    id: 'faq-5',
    question: 'Que faire si ma porte est bloquée ?',
    answer: 'Appelez-nous immédiatement ! Ne forcez pas la porte, cela pourrait l\'endommager davantage. Nos experts sauront intervenir sans dégâts.',
    category: 'emergency',
  },
  {
    id: 'faq-6',
    question: 'Acceptez-vous les paiements par carte ?',
    answer: 'Oui, nous acceptons tous les modes de paiement : espèces, carte bancaire, virement. La facture vous est envoyée automatiquement.',
    category: 'general',
  },
];

// Données pour les statistiques
const statsData = [
  {
    id: 'clients',
    number: 20000,
    suffix: '+',
    label: 'Clients satisfaits',
    icon: <CheckCircle size={32} className="text-white" />
  },
  {
    id: 'experience',
    number: 15,
    suffix: '+',
    label: 'Années d\'expérience',
    icon: <Clock size={32} className="text-white" />
  },
  {
    id: 'technicians',
    number: 50,
    suffix: '+',
    label: 'Techniciens experts',
    icon: <Shield size={32} className="text-white" />
  }
];

// Données pour le processus
const processSteps = [
  {
    id: 'step-1',
    number: '1',
    title: 'Appelez-nous',
    description: 'Expliquez votre situation (porte claquée, clé perdue, serrure cassée…).',
    icon: <Phone size={32} className="text-white" />,
    color: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },
  {
    id: 'step-2',
    number: '2',
    title: 'Intervention rapide',
    description: 'Un serrurier se rend sur place en moins de 30 minutes.',
    icon: <Clock size={32} className="text-white" />,
    color: 'bg-gradient-to-br from-white to-gray-200 border-2 border-gray-300'
  },
  {
    id: 'step-3',
    number: '3',
    title: 'Problème résolu',
    description: 'Ouverture sécurisée ou remplacement de serrure immédiat.',
    icon: <CheckCircle size={32} className="text-gray-700" />,
    color: 'bg-gradient-to-br from-red-500 to-red-600'
  }
];

// Données pour l'équipe
const teamMember = {
  id: 'chef-equipe',
  name: 'Jean-Pierre',
  role: 'Chef d\'équipe chez Serrurierfrancais.com',
  image: '', // Plus d'image, remplacée par un avatar professionnel
  phone: '07 56 90 21 12',
  description: 'Avec plus de 15 ans d\'expérience dans le domaine de la serrurerie d\'urgence, je dirige une équipe de professionnels qualifiés et passionnés. Chaque intervention est pour nous l\'occasion de vous aider et de vous rassurer dans les moments difficiles.',
  experience: 'Plus de 15 ans d\'interventions à domicile dans toute la région parisienne'
};

export default function HomePage() {
  useEffect(() => {
    initializeTracking();
    saveGclid();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section Apple Style */}
      <section className="hero-apple">
        <div className="container-apple">
          <h1>
            Serrurier d'urgence {config.primaryCity} 24h/24
          </h1>
          
          <p>
            Artisans français de confiance • Intervention en {config.slaMinutes}
          </p>
          
          {/* Annonce de prix Apple style */}
          <div className="price-apple">
            Ouverture de porte à partir de 39€
          </div>
          
          {/* Bouton CTA Apple style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <CallButton variant="primary" size="lg" />
          </div>
          
          {/* Trust indicators Apple style */}
          <div className="flex flex-wrap justify-center gap-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-secondary">
              <CheckCircle size={20} className="text-accent" />
              <span className="text-apple-small">Intervention rapide</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <Clock size={20} className="text-accent" />
              <span className="text-apple-small">{config.slaMinutes}</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <Shield size={20} className="text-accent" />
              <span className="text-apple-small">Artisans vérifiés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <StatsCounter stats={statsData} />

      {/* Comment ça marche */}
      <ProcessSteps steps={processSteps} />

      {/* Équipe */}
      <TeamSection teamMember={teamMember} />

      {/* Pourquoi nous choisir */}
      <section className="py-20 px-4 bg-white/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
            Pourquoi nous choisir ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Clock size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Intervention rapide</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Arrivée en <span className="font-bold text-blue-600">{config.slaMinutes}</span> en moyenne. 
                Nous comprenons l'urgence de votre situation.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6 border-2 border-gray-300">
                <Shield size={40} className="text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Artisans vérifiés</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                {config.content.trust.certified}. Tous nos artisans sont certifiés, assurés et passent des vérifications de sécurité rigoureuses.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Star size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Disponibilité 24h/24</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Service d'urgence disponible 7j/7, y compris les weekends et jours fériés. Votre sécurité ne prend jamais de vacances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages clients */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
            Ce que disent nos clients
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-20 px-4 bg-white/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
            Intervention dans toute l'Île-de-France
          </h2>
          <CityGrid maxItems={24} />
        </div>
      </section>

      {/* Nos partenaires */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Nos partenaires de confiance
          </h2>
          <PartnersMarquee 
            partners={config.partners}
            speed={25000}
            pauseOnHover={true}
            grayscale={false}
            gap={48}
            height={48}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur nos services de serrurerie d'urgence
            </p>
          </div>
          <FAQ faqs={faqData} />
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-white to-red-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
            Besoin d'un serrurier maintenant ?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto font-semibold" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Appelez-nous 24h/24 pour une intervention immédiate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CallButton variant="primary" size="lg" />
            <PhoneButton variant="secondary" size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}