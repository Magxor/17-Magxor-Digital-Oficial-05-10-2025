import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Create WhatsApp message
    const message = `Hola, me comunico desde tu web: MagxorDigital
    
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Servicio de interés: ${formData.service}
Mensaje: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5493585603676?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, me comunico desde tu web: MagxorDigital, quiero conocer más sobre las web personalizadas para aumentar mis ventas.');
    window.open(`https://wa.me/5493585603676?text=${message}`, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Contactanos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a impulsar tu presencia digital. Contáctanos y comencemos a trabajar juntos.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-6">Envíanos un Mensaje</h2>
              
              {isSubmitted && (
                <div className="bg-green-500/10 border border-green-500 rounded-lg p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-green-400">¡Mensaje enviado! Te contactaremos pronto.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+54 9 XXX XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Servicio de Interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Plan Particular">Plan Particular</option>
                      <option value="Plan Comercio">Plan Comercio</option>
                      <option value="Plan Empresa">Plan Empresa</option>
                      <option value="Consultoría">Consultoría</option>
                      <option value="Jingles">Jingles</option>
                      <option value="Logos">Logos</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-vertical"
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  />
                </div>
                
                <button
                  type="submit"
                  id="contact-form-submit-button"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Información de Contacto</h2>
                <p className="text-gray-300 mb-8">
                  Estamos disponibles para responder tus consultas y ayudarte con tu proyecto digital.
                </p>
              </div>

              <div className="space-y-6">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  info="imperiomagxor@gmail.com"
                  action={() => window.open('mailto:imperiomagxor@gmail.com')}
                />
                <ContactInfo
                  icon={MapPin}
                  title="Ubicación"
                  info="Argentina"
                />
                <ContactInfo
                  icon={Clock}
                  title="Horarios de Atención"
                  info="Lunes a Viernes: 9:00 - 20:00"
                />
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-600/10 border border-green-600 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                  <div>
                    <h3 className="text-xl font-bold text-white">¿Necesitas Respuesta Inmediata?</h3>
                    <p className="text-gray-300">Contáctanos por WhatsApp</p>
                  </div>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  id="contact-whatsapp-chat-button"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chatear por WhatsApp</span>
                </button>
              </div>

              {/* Free Month CTA */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">¡Primer Mes Gratis!</h3>
                <p className="text-gray-300 mb-4">
                  Prueba nuestro servicio sin riesgo. Tu primer mes es completamente gratuito.
                </p>
                <a
                  href="/servicios"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver Planes Disponibles →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfo({ icon: Icon, title, info, action }: { 
  icon: any; 
  title: string; 
  info: string; 
  action?: () => void;
}) {
  return (
    <div 
      className={`flex items-center space-x-4 p-4 bg-gray-800 rounded-lg ${action ? 'cursor-pointer hover:bg-gray-700 transition-colors' : ''}`}
      onClick={action}
    >
      <Icon className="w-6 h-6 text-blue-500" />
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-gray-300">{info}</p>
      </div>
    </div>
  );
}