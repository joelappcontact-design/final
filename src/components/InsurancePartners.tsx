'use client';

import { Shield, CheckCircle, Star } from 'lucide-react';

interface InsurancePartner {
  name: string;
  logo: string;
  description: string;
  rating: number;
  coverage: string[];
}

interface InsurancePartnersProps {
  partners: InsurancePartner[];
  className?: string;
}

export default function InsurancePartners({ partners, className = '' }: InsurancePartnersProps) {
  return (
    <section className={`py-20 px-4 partners-section ${className}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield size={16} />
            Partenaires Assurance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos partenaires assurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous travaillons avec les plus grandes compagnies d'assurance françaises pour vous offrir une couverture optimale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card p-6 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {partner.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{partner.name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < partner.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{partner.rating}/5</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {partner.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Couverture incluse :</h4>
                {partner.coverage.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Partenaire officiel</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi choisir nos partenaires assurance ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Couverture complète</h4>
                  <p className="text-sm text-gray-600">Protection totale pour tous vos biens</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Remboursement rapide</h4>
                  <p className="text-sm text-gray-600">Indemnisation sous 48h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star size={16} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Service premium</h4>
                  <p className="text-sm text-gray-600">Support client 24h/24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
