'use client';

interface InsurancePartner {
  name: string;
}

interface InsurancePartnersProps {
  partners: InsurancePartner[];
}

export default function InsurancePartners({ partners }: InsurancePartnersProps) {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Partenaires assurance
          </h2>
          <p className="text-sm text-gray-600">
            Nous travaillons avec les principales compagnies d'assurance
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-sm text-gray-600">
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}