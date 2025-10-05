import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: '¿Cómo funciona el servicio?',
        answer: 'Primero, completas un formulario para cargar tu negocio, después, tenemos una consulta para entender tus necesidades, luego diseñamos tu sitio web, lo revisas para aprobación, y finalmente lo publicamos. Todo el proceso toma aproximadamente 5-7 días hábiles.'
      },
      {
        question: '¿Qué incluye el primer mes gratis?',
        answer: 'Incluye todos los servicios del plan que elijas: diseño web, hosting, (es dónde se aloja la pagina), tarjeta digital e imprimible y todas las funcionalidades correspondientes. Es una oportunidad para que pruebes nuestro servicio sin ningún tipo de riesgo.'
      },
      {
        question: '¿Necesito conocimientos técnicos?',
        answer: 'No, Nosotros nos encargamos de todo: desde el diseño hasta la publicacion y matenimiento de tu sitio web. Sólo necesitas proporcionarnos la información de tu negocio para potenciarlo.'
      }
    ]
  },
  {
    category: 'Pagos y Facturación',
    questions: [
      {
        question: '¿Cómo se paga el servicio?',
        answer: 'Aceptamos transferencias y pagos con MercadoPago. El servicio se paga mensualmente, el primer mes es gratis (pagando con MercadoPago) para que puedas probar nuestros servicios sin compromiso y sin riesgos'
      },
      {
        question: '¿Hay costos ocultos?',
        answer: 'El precio que ves, es el precio que pagas. Incluye: Diseño, Hosting, Mantenimiento y Soporte Técnico. Todo está incluido en la mensualidad.'
      },
      {
        question: '¿Puedo cambiar de plan?',
        answer: 'Si, en cualquier momento. Tanto si quieres subir o bajar de plan. La diferencia de cobro se aplica en el siguiente mes de la solicitud.'
      }
    ]
  },
  {
    category: 'Actualizaciones y Soporte',
    questions: [
      {
        question: '¿Cómo se actualiza el contenido?',
        answer: 'Se solicitan por Whatsapp. Dependiendo de tu plan, puedes solicitar actualizaciones una o dos veces al mes.'
      },
      {
        question: '¿Qué tipo de actualizaciones puedo solicitar?',
        answer: 'Puedes solicitar cambios de texto, imágenes, información de contacto, horarios, productos o servicios y cualquier otro contenido en el sitio.'
      },
      {
        question: '¿Tienen soporte técnico?',
        answer: 'Si, ofrecesmos soporte técnico completo. Puedes contactarnos por WhatsApp durante horario comercial. Respondemos consultas técnicas y resolvemos cualquier problema que puedas tener.'
      }
    ]
  },
  {
    category: 'Cancelación y Términos',
    questions: [
      {
        question: '¿Cómo se da de baja el servicio?',
        answer: 'Puedes dar de baja el servicio en cualquier momento sin problemas. Solo necesitas avisarnos con cindo días de anticipación antes del siguiente ciclo de cobro.'
      },
      {
        question: '¿Qué pasa si cancelo el servicio?',
        answer: 'Si cancelas el servicio, el mismo se mantendrá activo hasta el final del período pagado. Después de eso, todo se dará de baja.'
      },
      {
        question: '¿Puedo recuperar mi sitio después de cancelar?',
        answer: 'Si, puedes reactivar tu servicio en cualquier momento. Si han pasado menos de 30 días desde la cancelación, podemos restaurar tu sitio. Después de 30 días, necesitaremos recrear el contenido completo.'
      },
      {
        question: '¿Qué sucede si dejo de pagar o no pago?',
        answer: 'El sistema de cobro por MercadoPago está con figurado para cobro automático mes a mes, en el caso de no registrar tu cobro, todos tus servicios se pausarán automáticamente, esto hace que tu sitio no sea visto en internet. Todos los servicios se restaurarán una vez que el pago correspondiente se detecte.'
      }  
    ]
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('General');

  const categories = faqs.map(faq => faq.category);
  const currentFAQs = faqs.find(faq => faq.category === selectedCategory)?.questions || [];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, tengo una pregunta sobre sus servicios de diseño web.');
    window.open(`https://wa.me/5493585603676?text=${message}`, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Preguntas <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Frecuentes</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  id={`faq-category-${category.toLowerCase().replace(/\s+/g, '-')}-button`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenIndex(null);
                  }}
                  className={`px-6 py-3 rounded-lg transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {currentFAQs.map((faq, index) => {
                const itemKey = `${selectedCategory}-${index}`;
                return (
                  <div
                    key={itemKey}
                    className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors"
                  >
                    <button
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors"
                      id={`faq-item-${selectedCategory.toLowerCase().replace(/\s+/g, '-')}-${index}-button`}
                      onClick={() => setOpenIndex(openIndex === itemKey ? null : itemKey)}
                    >
                      <span className="text-lg font-semibold text-white pr-4">
                        {faq.question}
                      </span>
                      {openIndex === itemKey ? (
                        <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openIndex === itemKey && (
                      <div className="px-6 pb-4 border-t border-gray-700">
                        <p className="text-gray-300 pt-4 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿No Encontraste tu Respuesta?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está aquí para ayudarte. Contáctanos directamente y te responderemos lo antes posible.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-xl">
              <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
              <p className="text-gray-400 mb-4">Respuesta inmediata por WhatsApp</p>
              <button
                onClick={handleWhatsAppClick}
                id="faq-whatsapp-contact-button"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Contactar por WhatsApp
              </button>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl">
              <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Soporte Técnico</h3>
              <p className="text-gray-400 mb-4">Ayuda especializada para tu proyecto</p>
              <a
                href="/contacto"
                id="faq-support-contact-button"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Contactar Soporte
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}