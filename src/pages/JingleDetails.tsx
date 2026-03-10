import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, Star, CheckCircle } from 'lucide-react';

export function JingleDetails() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const jingleExamples = [
    {
      title: 'Musica Personalizada - Cataratás del Iguazú',
      description: 'Musica Diseñada por su autor que nos pidió componer su idea, nos dió su letra, nos pidio el ritmo y los instrumentos y aqui el resultado.',
      audioUrl: 'https://od.lk/s/OTdfOTk1NzAwMTVf/Cataratas%20del%20Iguaz%C3%BA2.mp3'
    },
    {
      title: 'Musica Personalizada - Comidas Ninja Torneo',
      description: 'Musica Diseñada para un juego de torneos de comida para un desarrollador de juegos.',
      audioUrl: 'https://od.lk/s/OTdfOTk1MDgzMTJf/COMIDAS%20NINJA%20TORNEO_1.mp3'
    },
    {
      title: 'Carga Express - Particular',
      description: 'Musica Diseñada para Ser Pegadiza y Fácil de Recordar',
      audioUrl: 'https://od.lk/s/OTdfOTQxMzQzMzVf/Muzzio%20Materiales.mp3'
    },
    {
      title: 'Jingle Electricista - Comercio',
      description: 'Diseñado para transmitir novedad al prestar servicios Eléctricos',
      audioUrl: 'https://od.lk/s/OTdfOTQxMzQzMzhf/Electricista%20en%20tu%20hogar.mp3'
    },
    {
      title: 'Jingle Gráfica - Comercio',
      description: 'Diseñado para expresar lo que Grafica Ventura representa para sus clientes',
      audioUrl: 'https://od.lk/s/OTdfOTQxMzQzMzlf/Gr%C3%A1fica%20Ventura%20Jingle.mp3'
    },
    {
      title: 'Jingle Carpintería - Comercio',
      description: 'Diseñado para Publicitar sus nuevos accesorios y creaciones',
      audioUrl: 'https://od.lk/s/OTdfOTQxMzQzNDBf/La%20Carpinter%C3%ADa%20de%20Jos%C3%A9.mp3'
    },
    {
      title: 'Jingle Manicura - Servicios',
      description: 'Diseñado para expresar juventur y energía, así como sus diseños y cuidados en las manos de sus clientas',
      audioUrl: 'https://od.lk/s/OTdfOTQxMzQzNDFf/manicura%20a%20domicilio.mp3'
    },
    {
      title: 'Musica Personalizada - Flor de Jazmín',
      description: 'Musica personalizada para un cliente que quería hacer realidad su música.',
      audioUrl: 'https://od.lk/s/OTdfOTk1NTU2NTBf/Flor%20de%20Jazmin.mp3'
    },
    {
      title: 'Musica Personalizada - María Pamela',
      description: 'Música para dedicar a una persona especial',
      audioUrl: 'https://od.lk/s/OTdfOTk0OTg5MzFf/Mar%C3%ADa%20Pamela%202.mp3'
    },
    {
      title: 'Jingle Tatoo - Moda',
      description: 'Diseño energético y memorable para promocionar de manera diferente',
      audioUrl: 'https://od.lk/s/OTdfOTQxMzQzMzRf/Tinta%20y%20Arte.mp3'
    },
    {
      title: 'Musica Personalizada - 15 Años Daira',
      description: 'Música para los 15 años de Daira dedicada por su abuela',
      audioUrl: 'https://od.lk/s/OTdfOTk1MTQ5MTRf/15%20A%C3%B1os%20Daira.mp3'
    },
    {
      title: 'Musica Personalizada - Mi Mamá',
      description: 'Música para dedicar a la madre de un cliente',
      audioUrl: 'https://od.lk/s/OTdfOTk1Nzk1MDRf/Mi%20Mam%C3%A1.mp3'
    },
    {
      title: 'Musica Personalizada - Mis Anhelos',
      description: 'Música personalizada de un cliente, materializamos su idea',
      audioUrl: 'https://od.lk/s/OTdfOTk1NjI3ODBf/Mis%20Anhelos%20V2mp3.mp3'
    },
    {
      title: 'Musica Personalizada - Mujercita Misionera',
      description: 'Música personalizada de un cliente, El covid no le permitió grabarlo y nosotros lo hicimos por él',
      audioUrl: 'https://od.lk/s/OTdfOTk1MTk3MzVf/Mujercita%20Misionera%202.mp3'
    },
    {
      title: 'Musica Personalizada - Tu Nombre María',
      description: 'Música personalizada para dedicar a una persona amada de nuestro cliente',
      audioUrl: 'https://od.lk/s/OTdfOTk1NzE3ODFf/Tu%20Nombre%2C%20Mar%C3%ADa.mp3'
    },
    {
      title: 'Musica Personalizada - 15 Años Antonela',
      description: 'Música para los 15 años de Antonela dedicada por su abuelo',
      audioUrl: 'https://od.lk/s/OTdfOTk0NDU0NDlf/Antonella%20Maria%20Cieo.mp3'
    }
  ];

  const features = [
    'Composición musical 100% original',
    'Personalizada con los instrumentos que quieras integrar',
    'Formatos MP3',
    'Derechos de uso comercial incluidos',
    'Revisiones ilimitadas hasta tu satisfacción',
    'Entrega en 1-5 días hábiles'
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Link
            to="/servicios"
            onClick={handleScrollToTop}
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>

          <div className="text-center mb-16">
            <Music className="w-16 h-16 text-purple-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Creación de <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Jingles</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Jingles profesionales que harán que tu marca sea inolvidable. Música original que conecta con tus clientes.
            </p>
          </div>

          {/* Reference Image */}
          <div className="mb-16">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Estudio de grabación profesional"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Audio Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Ejemplos de Nuestros Jingles
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
              {jingleExamples.map((example, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{example.title}</h3>
                      <p className="text-gray-400">{example.description}</p>
                    </div>
                    </div>
                  
                  <audio 
                    controls 
                    className="w-full mb-4"
                    style={{
                      background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                      borderRadius: '8px',
                      padding: '8px'
                    }}
                  >
                    <source src={example.audioUrl} type="audio/mp3" />
                    Tu navegador no soporta el elemento de audio.
                  </audio>
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
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing and CTA */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Precio Especial de Lanzamiento
            </h3>
            <div className="text-5xl font-bold text-purple-500 mb-6">
              $29.999
              <span className="text-lg text-gray-400 ml-2">pago único</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Incluye todo lo necesario para que tu marca suene profesional y sea recordada por tus clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdyaFQX4eA4zU2cyGiO3mXP0DFRPnamGBweIadMJ_cY9uQWTA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                id="jingle-details-order-button"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <Music className="w-5 h-5" />
                <span>¡Quiero mi Jingle o Música Personalizada!</span>
              </a>
              <a
                href="/contacto"
                onClick={handleScrollToTop}
                id="jingle-details-more-info-button"
                className="border-2 border-purple-500 text-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all hover:scale-105 inline-flex items-center justify-center space-x-2"
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
              "El jingle que crearon para nuestro restaurante es increíble. Nuestros clientes lo tarean y nos reconocen inmediatamente en la radio."
            </blockquote>
            <cite className="text-purple-400 font-semibold">
              - María González, Restaurante La Tradición
            </cite>
          </div>
        </div>
      </div>
    </div>
  );
}