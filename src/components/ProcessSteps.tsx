'use client';

import { CheckCircle, Phone, Clock, Wrench } from 'lucide-react';

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
}

export default function ProcessSteps({ steps, className = '' }: ProcessStepsProps) {
  return (
    <section className={`py-20 px-4 bg-white/30 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Nous intervenons rapidement et efficacement pour tous vos problèmes de serrurerie, 
            avec sérieux et sans stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Ligne de connexion */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-red-500 transform translate-x-4 z-0" />
              )}
              
              <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative`}>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-slate-700 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à résoudre votre problème ?
            </h3>
            <p className="text-white/90 mb-6">
              Appelez-nous maintenant pour une intervention immédiate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0123456789" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                📞 Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
