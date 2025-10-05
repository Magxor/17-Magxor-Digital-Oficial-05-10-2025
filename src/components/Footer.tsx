import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, me comunico desde tu web: MagxorDigital, quiero conocer más sobre las web personalizadas para aumentar mis ventas.');
    window.open(`https://wa.me/5493585603676?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://i.postimg.cc/VNLywLMy/Logo-Magxor.png"
                alt="Magxor Digital"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">Magxor Digital</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformamos tu negocio con presencia digital profesional que impulsa el crecimiento y conecta con tus clientes.
            </p>
            <button
              onClick={handleWhatsAppClick}
              id="footer-whatsapp-button"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={handleScrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" onClick={handleScrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" onClick={handleScrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={handleScrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/trabaja-con-nosotros" onClick={handleScrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  Trabajá con Nosotros
                </Link>
              </li>
              <li>
                <Link to="/representantes-oficiales" onClick={handleScrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  Representantes Oficiales
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Plan Particular</li>
              <li className="text-gray-400">Plan Comercio</li>
              <li className="text-gray-400">Plan Empresa</li>
              <li className="text-gray-400">Creación de Logos</li>
              <li className="text-gray-400">Creación de Jingles</li>
              <li className="text-gray-400">Consultoría Digital</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">              
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>imperiomagxor@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Magxor Digital. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}