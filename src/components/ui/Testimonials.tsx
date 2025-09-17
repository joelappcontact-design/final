'use client';

import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie L.',
    city: 'Paris 15ème',
    rating: 5,
    comment: 'Intervention très rapide et professionnelle. Le technicien était à l\'heure et a résolu mon problème de serrure en moins de 20 minutes. Je recommande vivement !',
    date: 'Il y a 2 jours',
    verified: true,
  },
  {
    id: 2,
    name: 'Jean-Pierre M.',
    city: 'Boulogne-Billancourt',
    rating: 5,
    comment: 'Excellent service ! J\'avais perdu mes clés et ils sont arrivés en 30 minutes. Tarif transparent et technicien très sympa. Merci beaucoup !',
    date: 'Il y a 1 semaine',
    verified: true,
  },
  {
    id: 3,
    name: 'Sophie D.',
    city: 'Neuilly-sur-Seine',
    rating: 4,
    comment: 'Très bon service, intervention rapide. Le technicien était compétent et a bien expliqué ce qu\'il faisait. Prix correct pour la prestation.',
    date: 'Il y a 3 jours',
    verified: true,
  },
  {
    id: 4,
    name: 'Michel R.',
    city: 'Levallois-Perret',
    rating: 5,
    comment: 'Service impeccable ! Disponible 24h/24, intervention en urgence un dimanche soir. Technicien professionnel et tarif raisonnable. À recommander !',
    date: 'Il y a 5 jours',
    verified: true,
  },
  {
    id: 5,
    name: 'Catherine B.',
    city: 'Issy-les-Moulineaux',
    rating: 5,
    comment: 'Parfait ! Changement de cylindre effectué rapidement. Le technicien était ponctuel, propre et très professionnel. Je ferai appel à eux sans hésiter.',
    date: 'Il y a 1 semaine',
    verified: true,
  },
  {
    id: 6,
    name: 'François L.',
    city: 'Antony',
    rating: 4,
    comment: 'Bon service, technicien compétent. Intervention dans les temps annoncés. Prix correct pour la qualité du travail fourni.',
    date: 'Il y a 4 jours',
    verified: true,
  },
  {
    id: 7,
    name: 'Isabelle M.',
    city: 'Créteil',
    rating: 5,
    comment: 'Service exceptionnel ! Disponible même un jour férié, intervention rapide et technicien très professionnel. Je recommande vivement cette entreprise.',
    date: 'Il y a 2 semaines',
    verified: true,
  },
  {
    id: 8,
    name: 'Philippe C.',
    city: 'Nanterre',
    rating: 5,
    comment: 'Très satisfait du service. Technicien à l\'heure, travail soigné et tarif transparent. Une entreprise de confiance que je recommande !',
    date: 'Il y a 6 jours',
    verified: true,
  },
  {
    id: 9,
    name: 'Valérie S.',
    city: 'Rueil-Malmaison',
    rating: 4,
    comment: 'Bon service, intervention dans les délais. Le technicien était professionnel et a bien expliqué les réparations effectuées.',
    date: 'Il y a 3 jours',
    verified: true,
  },
  {
    id: 10,
    name: 'Alain T.',
    city: 'Saint-Denis',
    rating: 5,
    comment: 'Excellent ! Service 24h/24, intervention rapide en pleine nuit. Technicien compétent et prix correct. Je recommande sans hésitation.',
    date: 'Il y a 1 semaine',
    verified: true,
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-all duration-300 min-w-[320px] flex-shrink-0"
    >
      {/* En-tête avec note et ville */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-zinc-300'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center space-x-1 text-sm text-zinc-500">
          <MapPin className="h-3 w-3" />
          <span>{testimonial.city}</span>
        </div>
      </div>

      {/* Commentaire */}
      <p className="text-zinc-700 mb-4 leading-relaxed text-sm">
        "{testimonial.comment}"
      </p>

      {/* Pied de carte */}
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-zinc-900 text-sm">{testimonial.name}</div>
          <div className="text-xs text-zinc-500">{testimonial.date}</div>
        </div>
        {testimonial.verified && (
          <div className="flex items-center space-x-1 text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs font-medium">Vérifié</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ScrollingTestimonials = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex space-x-6"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40,
            ease: 'linear',
          },
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="temoignages" className="bg-zinc-50">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6">Témoignages Clients</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Découvrez ce que disent nos clients sur nos services en Île-de-France
          </p>
        </motion.div>

        {/* Avis Google défilants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-transparent to-zinc-50 z-10 pointer-events-none"></div>
          <ScrollingTestimonials />
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-3xl font-bold text-zinc-900 mb-1">4.8/5</div>
              <div className="text-sm text-zinc-600">Note moyenne Google</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
              <div className="text-3xl font-bold text-zinc-900 mb-1">500+</div>
              <div className="text-sm text-zinc-600">Avis clients</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
              <div className="text-3xl font-bold text-zinc-900 mb-1">98%</div>
              <div className="text-sm text-zinc-600">Clients satisfaits</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Rejoignez nos clients satisfaits</h3>
            <p className="text-lg mb-6 opacity-90">
              Faites confiance à une entreprise reconnue pour son professionnalisme et sa réactivité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33756902112"
                className="bg-white text-[#1e3a8a] px-8 py-3 rounded-xl font-semibold hover:bg-zinc-100 transition-colors duration-300"
              >
                07 56 90 21 12
              </a>
              <a
                href="https://wa.me/+33756902112"
                className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
