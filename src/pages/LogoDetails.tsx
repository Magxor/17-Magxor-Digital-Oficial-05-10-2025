import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Download, Star, CheckCircle, Eye } from 'lucide-react';

export function LogoDetails() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const logoExamples = [
    {
      title: 'Logo Drugstore 24/7',
      category: 'Comercio',
      image: 'https://i.postimg.cc/5yyhTxQx/drugstore24-7.png&auto=format&fit=crop&w=400&q=80',
      description: 'Diseño Colorido y Llamativo para un Kiosco 24 Horas'
    },
    {
      title: 'Logo La Carpintería de José',
      category: 'Comercio',
      image: 'https://i.postimg.cc/XqPR0T99/la-carpinteria-de-jose.png&auto=format&fit=crop&w=400&q=80',
      description: 'Diseño Referente al Rubro, con estética e impronta'
    },
    {
      title: 'Logo Tribal Tatoo',
      category: 'Moda',
      image: 'https://i.postimg.cc/59kdvFDj/tribal-tatoo.png&auto=format&fit=crop&w=400&q=80',
      description: 'Diseño Inspirado en la moda del Tatoo, con curvas y colores impactantes'
    },
    {
      title: 'Logo Lavadero M&M',
      category: 'Comercio',
      image: 'https://i.postimg.cc/vHgRvZdh/lavadero-mym.png&auto=format&fit=crop&w=400&q=80',
      description: 'Sólido y confiable para Lavedaro de dos Hermanos, Matias y Miguel'
    },
    {
      title: 'Logo Los Venezolanos',
      category: 'Belleza',
      image: 'https://i.postimg.cc/8cGNjF5t/los-venezolanos.png&auto=format&fit=crop&w=400&q=80',
      description: 'Estético y Atrapante, con articulos del rubro'
    },
    {
      title: 'Logo CristianI Rodamientos',
      category: 'Empresa',
      image: 'https://i.postimg.cc/ZRpJbPTW/cristian-rodamientos.png&auto=format&fit=crop&w=400&q=80',
      description: 'Diseño Simple pero Suficiente, Claro y Conciso'
    }
  ];

  const features = [
    'Diseño 100% original y único',
    'Múltiples propuestas iniciales',
    'Versiones en color y monocromático',
    'Archivos en Pdf, Svg, Png y Jpg',
    'Revisiones ilimitadas',
    'Entrega en 3-5 días hábiles'
  ];

  const logoStyles = [
    'Minimalista y moderno',
    'Clásico y elegante',
    'Creativo y artístico',
    'Corporativo y profesional',
    'Juvenil y dinámico',
    'Vintage y retro'
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-black via-pink-950 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-6xl mx-auto">
          <Link
            to="/servicios"
            onClick={handleScrollToTop}
            className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>

          <div className="text-center mb-16">
            <Palette className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Creación de <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Logos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Logos únicos y profesionales que representan perfectamente la identidad de tu marca y la hacen memorable.
            </p>
          </div>

          {/* Logo Examples Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Ejemplos de Nuestros Diseños
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {logoExamples.map((logo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-800 hover:transform hover:scale-105 transition-transform duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={logo.image}
                      alt={logo.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-pink-500/10 text-pink-500 rounded-full text-sm mb-3">
                      {logo.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{logo.title}</h3>
                    <p className="text-gray-400">{logo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Styles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Estilos de Logo Disponibles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {logoStyles.map((style, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                  <span className="text-gray-300">{style}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              ¿Qué Incluye el Servicio?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Nuestro Proceso de Diseño
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Briefing</h3>
                <p className="text-gray-400 text-sm">Conocemos tu marca y objetivos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Conceptos</h3>
                <p className="text-gray-400 text-sm">Creamos múltiples propuestas</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Refinamiento</h3>
                <p className="text-gray-400 text-sm">Perfeccionamos el diseño elegido</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Entrega</h3>
                <p className="text-gray-400 text-sm">Entregamos Todos los Archivos en Formato Digital de Alta Calidad para ser Impresos en la gráfica de confianza o para usar en tus redes</p>
              </div>
            </div>
          </div>

          {/* Pricing and CTA */}
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Precio Especial de Lanzamiento
            </h3>
            <div className="text-5xl font-bold text-pink-500 mb-6">
              $19.999
              <span className="text-lg text-gray-400 ml-2">pago único</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Incluye todo lo necesario para que tu marca tenga una identidad visual profesional y memorable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdwL_pU2UbrcQXGcCYrDhVteLZVqHOvDHiayfhs04OFf7zMyg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                id="logo-details-order-button"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <Palette className="w-5 h-5" />
                <span>¡Quiero mi Logo!</span>
              </a>
              <a
                href="/contacto"
                onClick={handleScrollToTop}
                id="logo-details-more-info-button"
                className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-500 hover:text-white transition-all hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Más Información</span>
              </a>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-300 italic mb-4">
              "El logo que diseñaron para nuestro negocio superó nuestras expectativas. Es exactamente lo que necesitábamos para destacar en el mercado."
            </blockquote>
            <cite className="text-pink-400 font-semibold">
              - José Mendoza, Dueño de La Carpintería de José
            </cite>
          </div>
        </div>
      </div>
    </div>
  );
}