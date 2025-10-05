import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, User, Building2, Building, ArrowRight, Globe, Search, Smartphone, Headphones, Music, Palette } from 'lucide-react';

const plans = [
  {
    icon: User,
    title: 'Plan Particular',
    price: '10.000',
    popular: false,
    features: [
      'Diseño web profesional personalizado',
      'Hosting incluido',
      'Tarjeta de presentación digital e imprimible',
      'Información del servicio',
      'Contacto directo por WhatsApp',
      'Una Actualización Mensual'
    ]
  },
  {
    icon: Building2,
    title: 'Plan Comercio',
    price: '20.000',
    popular: false,
    features: [
      'Diseño web profesional personalizado',
      'Hosting incluido',
      'Tarjeta de presentación digital e imprimible',
      'Información completa del negocio',
      'Detalles de productos/servicios',
      'Links a redes sociales',
      'Una Actualizacion mensual',
      'Carga de Datos y Fotos en Google Maps',
      'Horarios de Atención',
      'Dirección de la Sucursal',
      'Contacto Directo por Whatsapp'
    ]
  },
  {
    icon: Building,
    title: 'Plan Empresa',
    price: '30.000',
    popular: true,
    features: [
      'Diseño web profesional personalizado',
      'Hosting incluido',
      'Tarjeta de presentación digital e imprimible',
      'Información completa de la Empresa',
      'Detalles de productos/servicios',
      'Botón interactivo "¿Cómo llegar?"',
      'Links a redes sociales',
      'Dos Actualizaciones mensuales',
      'Carga de Datos y Fotos en Google Maps',
      'Horarios de Atención Interactivo',
      'Dirección de las Sucursales',
      'Contacto Directo por Whatsapp',
      'Análisis de tráfico de página web',
      'Análisis por País, Ciudad y Dispositivos',
      'Análisis de visitas, escaneos de qr y contactos',
      'Seo Avanzado para Visualizaciones Masivas',
      'Servicio de Reservas',
      'Servicio de Turnos',
      'Menú Interactivo',
      'Reseñas de Google'
      
    ]
  }
];

const additionalServices = [
  {
    icon: Globe,
    title: 'Diseño Web Personalizado',
    description: 'Sitios web únicos diseñados específicamente para tu marca y objetivos de negocio.'
  },
  {
    icon: Search,
    title: 'Optimización SEO',
    description: 'Mejora tu posicionamiento en Google y atrae más clientes potenciales.'
  },
  {
    icon: Smartphone,
    title: 'Diseño Responsive',
    description: 'Tu sitio web se verá perfecto en todos los dispositivos: móvil, tablet y desktop.'
  },
  {
    icon: Headphones,
    title: 'Soporte Continuo',
    description: 'Atención personalizada y actualizaciones regulares para mantener tu sitio actualizado.'
  }
];

const creativeServices = [
  {
    icon: Music,
    title: 'Creación de Jingles',
    price: '9.999',
    description: 'Jingles profesionales y memorables que harán que tu marca se destaque y sea recordada por tus clientes.',
    features: [
      'Composición musical',
      'Letra personalizada',
      'Calidad de Audio Impecable',
      'El Género que más te guste',
      'Formatos de alta calidad',
      'Derechos de uso comercial'
    ],
    detailsPath: '/jingle-details'
  },
  {
    icon: Palette,
    title: 'Creación de Logos',
    price: '9.999',
    description: 'Logos únicos y profesionales que representen perfectamente la identidad visual de tu marca.',
    features: [
      'Diseño Originales',
      'Múltiples propuestas',
      'Versiones en diferentes formatos',
      'Revisiones ilimitadas'
    ],
    detailsPath: '/logo-details'
  }
];

export function Services() {
  const navigate = useNavigate();

  const handlePlanSelection = (planTitle: string) => {
    window.scrollTo(0, 0);
    navigate(`/plan-details?plan=${encodeURIComponent(planTitle)}`);
  };

  const handleServiceDetails = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestros <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Servicios</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Planes diseñados para impulsar tu presencia digital y hacer crecer tu negocio
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Elige el Plan Perfecto para tu Negocio
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Todos nuestros planes incluyen el primer mes gratis para que puedas probar nuestro servicio sin riesgo
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`relative bg-gray-800 rounded-xl p-8 hover:transform hover:scale-105 transition-transform duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Más Elegido
                    </span>
                  </div>
                )}
                
                <plan.icon className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold text-blue-500 mb-6">
                  ${plan.price}
                  <span className="text-gray-400 text-base">/mes</span>
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePlanSelection(plan.title)}
                  id={`services-plan-select-${plan.title.toLowerCase().replace(/\s+/g, '-')}-button`}
                  className={`w-full px-6 py-4 rounded-lg hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-2 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  <span>Elegir este Plan</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Servicios Creativos
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Potencia tu marca con nuestros servicios de diseño y audio profesional
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {creativeServices.map((service) => (
              <div
                key={service.title}
                className="bg-gray-800 rounded-xl p-8 hover:transform hover:scale-105 transition-transform duration-300"
              >
                <service.icon className="w-12 h-12 text-purple-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-3xl font-bold text-purple-500 mb-6">
                  ${service.price}
                  <span className="text-gray-400 text-base"> pago único</span>
                </p>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <Check className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleServiceDetails(service.detailsPath)}
                  id={`services-creative-details-${service.title.toLowerCase().replace(/\s+/g, '-').replace('creación-de-', '')}-button`}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-4 rounded-lg hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Ver Ejemplos</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            ¿Qué Incluyen Nuestros Servicios?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="bg-gray-800 p-6 rounded-xl text-center hover:transform hover:scale-105 transition-transform duration-300"
              >
                <service.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Nuestro Proceso de Trabajo
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Consulta Inicial"
              description="Analizamos tus necesidades y objetivos para crear la estrategia perfecta."
            />
            <ProcessStep
              number="02"
              title="Diseño y Desarrollo"
              description="Creamos tu sitio web personalizado con diseño profesional y funcionalidad óptima."
            />
            <ProcessStep
              number="03"
              title="Revisión y Ajustes"
              description="Revisas el proyecto y realizamos los ajustes necesarios hasta tu completa satisfacción."
            />
            <ProcessStep
              number="04"
              title="Lanzamiento"
              description="Publicamos tu sitio web y te brindamos soporte continuo para su mantenimiento."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}