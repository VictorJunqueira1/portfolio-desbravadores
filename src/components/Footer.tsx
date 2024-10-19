import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Phone, Mail, MapPin, CircleArrowRight } from 'lucide-react';
import { MdEmail } from 'react-icons/md';

const FooterMain: React.FC = () => {
    return (
        <div className="py-8 bg-black text-white">
            <footer className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-4">
                <div>
                    <Link href={"https://www.instagram.com/desbravadoreshomeadventure/"} className="flex items-center mb-4 md:mb-0">
                        <Image
                            height={40}
                            width={40}
                            alt="home-adventure-logo"
                            src="/images/logo-home.jpg"
                            className="mr-2 h-10 w-10 rounded-md shadow-lg"
                        />
                        <span className="text-2xl font-semibold">Home Adventure</span>
                    </Link>
                    <div className='max-w-sm'>
                        <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam eaque molestias aliquam officia quibusdam amet! Nisi eius eligendi nulla, laudantium culpa porro consequuntur deleniti blanditiis tempora voluptate minima laboriosam.</p>
                        <div className='flex items-start mt-4'>
                            <div className="flex justify-center space-x-6 mt-2">
                                <Link href="https://www.instagram.com/desbravadoreshomeadventure/" className="text-gray-600 hover:text-pink-500 transition duration-200" aria-label="Instagram">
                                    <FaInstagram className="text-2xl" />
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-green-500 transition duration-200" aria-label="Diretor do Clube">
                                    <FaWhatsapp className="text-2xl" />
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-red-500 transition duration-200" aria-label="Diretor do Clube">
                                    <MdEmail className="text-2xl" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-0 mb-4 md:mb-0">
                    <div className="mr-8">
                        <h3 className="font-semibold text-lg mb-2">Rotas</h3>
                        <ul className="mt-4 space-y-4 mb-4">
                            {[
                                { name: 'Início', path: '/' },
                                { name: 'Galeria', path: '/#gallery' },
                                { name: 'Sobre', path: '/aboutus' },
                                { name: 'Eventos', path: '/events' },
                                { name: 'Contato', path: '#contact' },
                            ].map((item) => (
                                <li key={item.name} className="flex items-center">
                                    <Link href={item.path} className="text-white flex items-center hover:text-orange-500 transition-all ease-in-out duration-300">
                                        <CircleArrowRight className="mr-2 h-5 w-5 text-orange-400" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Informações</h3>
                        <ul className="mt-2 space-y-4">
                            <li className="flex items-center">
                                <Phone className="mr-2 text-orange-400" />
                                <Link href="#" className="text-white hover:text-orange-500 transition-all ease-in-out duration-300">
                                    Telefone
                                    <p className="text-base text-gray-600">19 99999-8899</p>
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-2 text-orange-400" />
                                <Link href="mailto:homeadventureclube@gmail.com" className="text-white hover:text-orange-500 transition-all ease-in-out duration-300">
                                    Email
                                    <p className="text-base text-gray-600">homeadventureclube@gmail.com</p>
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <MapPin className="mr-2 text-orange-400" />
                                <Link href="#" className="text-white hover:text-orange-500 transition-all ease-in-out duration-300">
                                    Local de Encontro
                                    <p className="text-sm base text-gray-600">Rua Jandaia do Sul, 111 - Jardim Ipe III, Mogi Guaçu</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
            </footer>
            <div className="text-center mt-8 bg-black">
                <div className='flex justify-between items-center max-w-7xl mx-auto border-t border-gray-800 flex-col md:flex-row px-2'>
                    <p className="text-sm md:text-base text-gray-500 mt-4">© Home Adventure — 2024. Todos os Direitos Reservados.</p>
                    <div className='flex items-center gap-2 mt-4'>
                        <p className="text-sm md:text-base text-gray-500">Desenvolvido por Victor Junqueira. </p>
                        <Link href="https://github.com/VictorJunqueira1" className="text-gray-600 hover:text-white transition duration-200" aria-label="GitHub">
                            <FaGithub className="text-2xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMain;