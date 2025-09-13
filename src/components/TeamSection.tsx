'use client';

import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  phone: string;
  description: string;
  experience: string;
}

interface TeamSectionProps {
  teamMember: TeamMember;
  className?: string;
}

export default function TeamSection({ teamMember, className = '' }: TeamSectionProps) {
  return (
    <section className={`py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 ${className}`}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Notre équipe d'experts
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Rencontrez notre chef d'équipe et découvrez l'expertise qui fait notre réputation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo et infos */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                  <Image
                    src={teamMember.image}
                    alt={teamMember.name}
                    fill
                    className="rounded-3xl object-cover shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">⭐</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                {teamMember.name}
              </h3>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                {teamMember.role}
              </p>
              <p className="text-lg text-slate-600 mb-6">
                {teamMember.experience}
              </p>
              
              <a 
                href={`tel:${teamMember.phone}`}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-shadow"
              >
                📞 Appelez-moi au {teamMember.phone}
              </a>
            </div>

            {/* Description et témoignage */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  Mon engagement envers vous
                </h4>
                <p className="text-slate-700 text-lg leading-relaxed">
                  {teamMember.description}
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold mb-2">
                      Témoignage personnel
                    </h5>
                    <p className="text-white/90 leading-relaxed">
                      "Chaque intervention est une opportunité de vous aider et de vous rassurer. 
                      Votre sécurité et votre satisfaction sont ma priorité absolue."
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-slate-700 font-medium">Années d'expérience</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">5000+</div>
                  <div className="text-slate-700 font-medium">Interventions réussies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
