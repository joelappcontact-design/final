export default function TeamSection() {
  const testimonials = [
    {
      id: 1,
      text: "Intervention très rapide, en 30 minutes exactement. Prix respecté, aucun dégât. Je recommande vivement !",
      author: "Marie L.",
      location: "Paris",
      time: "Il y a 2 jours",
      initial: "M"
    },
    {
      id: 2,
      text: "Artisan très professionnel, intervention rapide et efficace. Plus de peur des arnaques avec ces serruriers !",
      author: "Jean-Pierre M.",
      location: "Neuilly-sur-Seine",
      time: "Il y a 1 semaine",
      initial: "J"
    },
    {
      id: 3,
      text: "Intervention de nuit, très respectueux. Le prix était exactement celui annoncé. Service impeccable.",
      author: "Sophie D.",
      location: "Boulogne-Billancourt",
      time: "Il y a 3 jours",
      initial: "S"
    },
    {
      id: 4,
      text: "Service exceptionnel ! Arrivé en 20 minutes, problème résolu sans dégâts. Prix très correct.",
      author: "Pierre M.",
      location: "Versailles",
      time: "Il y a 5 jours",
      initial: "P"
    },
    {
      id: 5,
      text: "Très professionnel, intervention rapide et efficace. Je recommande sans hésitation !",
      author: "Claire B.",
      location: "Créteil",
      time: "Il y a 1 semaine",
      initial: "C"
    },
    {
      id: 6,
      text: "Excellent service ! Artisan ponctuel, travail soigné, prix respecté. Parfait !",
      author: "Antoine R.",
      location: "Nanterre",
      time: "Il y a 3 jours",
      initial: "A"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="glass-card p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-full flex items-center justify-center text-white font-bold text-lg">
              {testimonial.initial}
            </div>
            <div className="flex-1">
              <p className="text-gray-200 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="text-sm">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-blue-300">{testimonial.location} • {testimonial.time}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}