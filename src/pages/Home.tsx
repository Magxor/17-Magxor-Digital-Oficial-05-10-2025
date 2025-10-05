import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Globe, Search, Zap, Star, Users, Award } from 'lucide-react';

export function Home() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-950 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.25
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Feature icon={Globe} text="Diseño Web Profesional" />
            <Feature icon={Search} text="Optimización SEO" />
            <Feature icon={Rocket} text="Resultados Garantizados" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Impulsa tu Presencia Online
            </span>
            <br />
            <span className="text-4xl md:text-6xl">
              con Diseño Web y SEO Profesional
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformamos tu negocio en una presencia digital impactante. 
            Diseño web personalizado y optimización SEO para destacar en Google.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-lg inline-block mb-12 animate-pulse">
            <div className="bg-black px-8 py-4 rounded-lg">
              <p className="text-2xl md:text-3xl font-bold text-white">
                ¡Aprovecha tu Primer Mes Gratis!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/servicios"
              onClick={handleScrollToTop}
              id="home-hero-view-plans-button"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-6 rounded-lg text-xl font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-3 shadow-lg shadow-blue-500/20"
            >
              <span>Ver Nuestros Planes</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/portfolio"
              onClick={handleScrollToTop}
              id="home-hero-view-portfolio-button"
              className="border-2 border-blue-500 text-blue-500 px-12 py-6 rounded-lg text-xl font-semibold hover:bg-blue-500 hover:text-white transition-all hover:scale-105 flex items-center justify-center space-x-3"
            >
              <span>Ver Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard icon={Users} number="98+" label="Clientes Satisfechos" />
            <StatCard icon={Globe} number="105+" label="Sitios Web Creados" />
            <StatCard icon={Star} number="5.0" label="Calificación Promedio" />
            <StatCard icon={Award} number="2+" label="Años de Experiencia" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50" />
        
        <div className="container mx-auto px-4 relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Impulsar tu Negocio?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Únete a más de 50 empresas que ya confían en nosotros para su presencia digital
          </p>
          
          <div className="max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
            <Link
              to="/servicios"
              onClick={handleScrollToTop}
              id="home-cta-free-month-button"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-8 hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-4"
            >
              <Zap className="w-8 h-8 text-white animate-pulse" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">¡Tu Primer Mes, Gratis!</h3>
                <p className="text-white/80">Comienza tu presencia digital sin riesgo</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="hidden md:flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
      <Icon className="w-5 h-5 text-blue-500" />
      <span className="text-gray-200">{text}</span>
    </div>
  );
}

function StatCard({ icon: Icon, number, label }: { icon: any; number: string; label: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <Icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
      <div className="text-3xl font-bold text-white mb-2">{number}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}