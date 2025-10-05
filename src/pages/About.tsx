import React from 'react';
import { Target, Eye, Heart, Users, Award, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sobre <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Nosotros</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos un equipo apasionado por transformar negocios a través del diseño web profesional y estrategias digitales efectivas.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Nuestra Historia</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
              Magxor Digital es una agencia especializada en desarrollo web profesional para cualquiera que quiera llevar a otro nivel su negocio, enfocada en crear soluciones digitales personalizadas que potencien el crecimiento de cada empresa. Con más de 2 años de experiencia en el mercado, hemos transformado la presencia digital de más de 98 negocios, ayudándolos a aumentar sus ventas, fortalecer su branding online y mejorar la conexión con sus clientes.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
              Apostamos por el diseño web responsivo, la optimización SEO on-page, y el uso de métricas avanzadas de Google para evaluar el rendimiento real de cada sitio y maximizar su impacto comercial. Analizamos datos de Google Analytics, Google Search Console y otras herramientas clave para ofrecer resultados medibles y sostenibles en el tiempo.
              </p>
              <p className="text-gray-300 leading-relaxed">
              Nuestra filosofía es democratizar el acceso a sitios web de calidad, brindando soluciones escalables que se adaptan a las necesidades específicas de cada cliente ofreciendo la creación de páginas optimizadas para atraer clientes y generer más ventas.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
              Si estás buscando una empresa que combine tecnología, creatividad y estrategia digital, Magxor Digital es tu socio ideal para alcanzar el éxito online.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Equipo trabajando"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Nuestros Valores
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Target}
              title="Misión"
              description="Empoderar a las empresas con presencia digital profesional que impulse su crecimiento y conecte efectivamente con sus clientes."
            />
            <ValueCard
              icon={Eye}
              title="Visión"
              description="Ser la empresa líder en soluciones web accesibles, ayudando a transformar la presencia digital de miles de negocios."
            />
            <ValueCard
              icon={Heart}
              title="Valores"
              description="Compromiso, calidad, innovación y atención personalizada. Cada proyecto es único y merece nuestra máxima dedicación."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            ¿Por Qué Elegirnos?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
              icon={Award}
              title="Honestidad"
              description="Cuidamos el Bolsillo y no te ofreceremos servicios que no te servirán en tu camino al éxito. Si tú Ganas, Ganamos Nosotros."
            />
            <FeatureCard
              icon={Users}
              title="Atención Personalizada"
              description="Cada cliente recibe atención individual y soluciones adaptadas a sus necesidades específicas."
            />
            <FeatureCard
              icon={Award}
              title="Calidad Garantizada"
              description="Todos nuestros proyectos cumplen con los más altos estándares de calidad y diseño profesional."
            />
            <FeatureCard
              icon={Lightbulb}
              title="Innovación Constante"
              description="Nos mantenemos actualizados con las últimas tendencias y tecnologías del diseño web."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Nuestro Compromiso
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Estamos comprometidos con el éxito de nuestros clientes. Cada proyecto es una oportunidad de crear algo extraordinario que impulse el crecimiento de tu negocio.
          </p>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Más de 98 Empresas Confían en Nosotros
            </h3>
            <p className="text-gray-300">
              Desde pequeños emprendimientos hasta empresas establecidas, hemos ayudado a transformar su presencia digital y aumentar sus ventas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl text-center hover:transform hover:scale-105 transition-transform duration-300">
      <Icon className="w-16 h-16 text-blue-500 mx-auto mb-6" />
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300">
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}