import { Language } from '@/types/content';

interface Partner {
  name: string;
  logo: string;
}

interface PartnersSectionProps {
  title: string;
  partners: Partner[];
  lang: Language;
}

export default function PartnersSection({ title, partners, lang }: PartnersSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'نفخر بشراكتنا مع أفضل الشركات والمؤسسات في المملكة'
              : 'Proud to partner with leading companies and organizations in the Kingdom'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-16 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium text-center">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
