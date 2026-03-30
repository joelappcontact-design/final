'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie L.',
    location: 'Paris',
    time: 'Il y a 2 jours',
    rating: 5,
    text: 'Intervention très rapide, en 30 minutes exactement. Prix respecté, aucun dégât. Je recommande vivement !'
  },
  {
    name: 'Jean-Pierre M.',
    location: 'Neuilly-sur-Seine',
    time: 'Il y a 1 semaine',
    rating: 5,
    text: 'Artisan très professionnel, intervention rapide et efficace. Plus de peur des arnaques avec ces serruriers !'
  },
  {
    name: 'Sophie D.',
    location: 'Boulogne-Billancourt',
    time: 'Il y a 3 jours',
    rating: 5,
    text: 'Intervention de nuit, très respectueux. Le prix était exactement celui annoncé. Service impeccable.'
  },
  {
    name: 'Pierre M.',
    location: 'Versailles',
    time: 'Il y a 5 jours',
    rating: 5,
    text: 'Service exceptionnel ! Arrivé en 20 minutes, problème résolu sans dégâts. Prix très correct.'
  },
  {
    name: 'Claire B.',
    location: 'Créteil',
    time: 'Il y a 1 semaine',
    rating: 5,
    text: 'Très professionnel, intervention rapide et efficace. Je recommande sans hésitation !'
  },
  {
    name: 'Antoine R.',
    location: 'Nanterre',
    time: 'Il y a 3 jours',
    rating: 5,
    text: 'Excellent service ! Artisan ponctuel, travail soigné, prix respecté. Parfait !'
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-gray-900 mb-6">
            Ce que disent nos clients
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Plus de 25 000 clients nous font confiance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Étoiles */}
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Texte du témoignage */}
              <p className="text-body text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Informations client */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location} • {testimonial.time}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;