import React from 'react';
import { User, MapPin, Target, Users, DollarSign, TrendingUp, Clock, Lightbulb, Zap, Award, ExternalLink, Briefcase } from 'lucide-react';

export function WorkWithUs() {
  const handleFormClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdoWM4qhLyi604urSDyded5rUr8mzMIXcXf3cBrcaBXzhzBIw/viewform?usp=sharing&ouid=106723355368760563496', '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-green-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="w-16 h-16 text-green-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Trabajá con <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Nosotros</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
            ¡Sumate como Representante Comercial!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sé parte de Magxor Digital y ayudanos a llevar creatividad a cada rincón.
          </p>
        </div>
      </section>

      {/* About Magxor Digital */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Sobre Magxor Digital
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Magxor Digital es una empresa creativa que diseña páginas web, logos y jingles para particulares, comercios y empresas. 
              Nos apasiona transformar ideas en identidad digital.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              ¿Qué Buscamos?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <RequirementCard
                icon={User}
                title="Personas mayores de 18 años"
                description="Buscamos personas responsables y comprometidas con ganas de crecer profesionalmente."
              />
              <RequirementCard
                icon={Users}
                title="Ganas de conectar con clientes"
                description="Salir por tu localidad o donde quieras y conectar con potenciales clientes."
              />
              <RequirementCard
                icon={Target}
                title="Autonomía y trabajo por objetivos"
                description="Capacidad de trabajar de forma independiente y orientada a resultados."
              />
              <RequirementCard
                icon={MapPin}
                title="Ubicación libre"
                description="Trabajás desde donde estés, sin restricciones geográficas."
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              ¿Cómo Funciona el Rol?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ProcessCard
                icon={Users}
                title="Buscás clientes en tu zona"
                description="Utilizás tu red de contactos y explorás oportunidades en tu área."
              />
              <ProcessCard
                icon={DollarSign}
                title="Comisión mensual recurrente"
                description="Recibís comisión mensual mientras el cliente esté activo con nosotros."
              />
              <ProcessCard
                icon={TrendingUp}
                title="Cuanto más vendés, más ganás"
                description="Sin límites en tus ingresos. Tu esfuerzo se refleja directamente en tus ganancias."
              />
              <ProcessCard
                icon={Clock}
                title="100% flexible"
                description="Sin horarios fijos, sin oficina. Trabajás cuando y donde quieras."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              ¿Por Qué Sumarte?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <BenefitCard
                icon={Lightbulb}
                title="Marca creativa y en crecimiento"
                description="Formás parte de una empresa innovadora con gran potencial de expansión."
              />
              <BenefitCard
                icon={Zap}
                title="Libertad total"
                description="Movete como te convenga, sin restricciones ni micromanagement."
              />
              <BenefitCard
                icon={Award}
                title="Soporte completo"
                description="Seguimiento y herramientas para mejorar constantemente tus resultados."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Lo que Dicen Nuestros Representantes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <TestimonialCard
                quote="Trabajar con Magxor Digital me dio la libertad que buscaba. Puedo manejar mis horarios y mis ingresos crecen mes a mes."
                author="Carlos M."
                role="Representante desde hace 8 meses"
              />
              <TestimonialCard
                quote="El soporte del equipo es excelente. Siempre están disponibles para ayudarme a cerrar ventas y resolver dudas."
                author="Ana L."
                role="Representante desde hace 6 meses"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Completá el formulario y comenzá tu camino como Representante Comercial de Magxor Digital
          </p>
          
          <div className="max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
            <button
              onClick={handleFormClick}
              id="work-with-us-apply-button"
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-12 py-6 rounded-lg text-xl font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-3 shadow-lg shadow-green-500/20 animate-pulse"
            >
              <Briefcase className="w-6 h-6" />
              <span>Quiero ser representante</span>
              <ExternalLink className="w-6 h-6" />
            </button>
            
            <p className="text-gray-400 mt-4 text-sm">
              El formulario se abrirá en una nueva ventana
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function RequirementCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300">
      <Icon className="w-12 h-12 text-green-500 mb-4" />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function ProcessCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300">
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function BenefitCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl text-center hover:transform hover:scale-105 transition-transform duration-300">
      <Icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <blockquote className="text-gray-300 italic mb-4">
        "{quote}"
      </blockquote>
      <div className="border-t border-gray-700 pt-4">
        <cite className="text-green-400 font-semibold block">{author}</cite>
        <span className="text-gray-500 text-sm">{role}</span>
      </div>
    </div>
  );
}