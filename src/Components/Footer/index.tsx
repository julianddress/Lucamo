import { FooterSection } from '../../Sections';
import { NewsletterForm } from './NewsLetterForm.tsx';
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    MapPin,
    Phone,
    Mail,
    CreditCard,
    Shield,
    ArrowUp,
} from 'lucide-react';

export function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
            <footer className="bg-gray-800 text-gray-300">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Información de la Empresa */}
                        <FooterSection title="Sobre Nosotros">
                            <div className="space-y-3">
                                <p className="text-sm">
                                    Comprometidos con la excelencia desde 2022. Ofrecemos los mejores productos
                                    con la mejor calidad y servicio.
                                </p>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/profile.php?id=61553406257588" className="hover:text-blue-400 transition-colors" target='_blank' rel='noreferrer'>
                                <Facebook size={20} />
                                </a>
                                <a href="https://www.instagram.com/impolujos_led?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-pink-400 transition-colors" target='_blank' rel='noreferrer'>
                                <Instagram size={20} />
                                </a>
                                <a href="#" className="hover:text-blue-300 transition-colors">
                                <Twitter size={20} />
                                </a>
                                <a href="#" className="hover:text-blue-500 transition-colors">
                                <Linkedin size={20} />
                                </a>
                            </div>
                            </div>
                        </FooterSection>

                        {/* Contacto */}
                        <FooterSection title="Contacto">
                            <div className="space-y-3">
                                <a href='https://maps.app.goo.gl/C8K75zQjeQ1EPg8i9' className="flex items-center gap-2" target='_blank' rel='noreferrer'>
                                    <MapPin size={18} />
                                    <span className="text-sm">Cl. 14 #54-32, Bogotá</span>
                                </a>
                                <a href='tel:+573223360144' className="flex items-center gap-2" target='_blank' rel='noreferrer'>
                                    <Phone size={18} />
                                    <span className="text-sm">+57 322 336 0144</span>
                                </a>
                                <a href='mailto:impolujosled@gmail.com' className="flex items-center gap-2" target='_blank' rel='noreferrer'>
                                    <Mail size={18} />
                                    <span className="text-sm">impolujosled@gmail.com</span>
                                </a>
                            </div>
                        </FooterSection>

                        {/* Enlaces Rápidos */}
                        <FooterSection title="Enlaces Rápidos">
                            <div className="grid gap-2">
                                <a href="#" className="text-sm hover:text-white transition-colors">
                                    Categorías
                                </a>
                                <a href="#" className="text-sm hover:text-white transition-colors">
                                    Ofertas
                                </a>
                                <a href="#" className="text-sm hover:text-white transition-colors">
                                    Quiénes Somos
                                </a>
                                <a href="#" className="text-sm hover:text-white transition-colors">
                                    FAQ
                                </a>
                            </div>
                        </FooterSection>

                        {/* Newsletter */}
                        <FooterSection title="Newsletter">
                            <div className="space-y-3">
                                <p className="text-sm">
                                    Suscríbete para recibir ofertas exclusivas y las últimas novedades
                                </p>
                                <NewsletterForm />
                            </div>
                        </FooterSection>
                    </div>

                    {/* Sección inferior */}
                    <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        {/* Métodos de pago */}
                        <div className="flex justify-center items-center gap-4">
                            <CreditCard size={24} />
                            <span className="text-sm">Pagos 100% seguros</span>
                        </div>

                        {/* Copyright */}
                        <div className="text-center text-sm">
                            <p>© 2024 Lucamo. Todos los derechos reservados.</p>
                        </div>

                        {/* Certificaciones */}
                        <div className="flex justify-center items-center gap-4">
                            <Shield size={24} />
                            <span className="text-sm">Certificado SSL</span>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Botón Volver Arriba */}
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                >
                    <ArrowUp size={24} />
                </button>
            </footer>
        );
}