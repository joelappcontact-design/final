export default function InsurancePartners() {
  const insurancePartners = [
    'AXA', 'Groupama', 'MAIF', 'MACIF', 'Allianz', 'Generali',
    'Crédit Agricole', 'BNP Paribas', 'SMA', 'Matmut', 'GMF', 'Covéa',
    'Swiss Life'
  ];

  const technicalPartners = [
    'ABUS', 'Bricard', 'CISA', 'DOM', 'Fichet', 'Héraclès',
    'ISEO', 'JPM', 'Mottura', 'Vachette'
  ];

  return (
    <div className="space-y-16">
      {/* Partenaires assurance */}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {insurancePartners.map((partner, index) => (
            <div key={index} className="glass-card p-4 text-center hover:scale-105 transition-transform">
              <div className="text-white font-semibold text-sm">{partner}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-blue-300 mt-6 text-sm">
          Tous nos artisans sont assurés et certifiés
        </p>
      </div>

      {/* Partenaires techniques */}
      <div>
        <h3 className="text-2xl font-bold text-center text-white mb-8">
          Nos partenaires techniques
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {technicalPartners.map((partner, index) => (
            <div key={index} className="glass-card p-4 text-center hover:scale-105 transition-transform">
              <div className="text-white font-semibold text-sm">
                Logo {partner} – partenaire serrurerie
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}