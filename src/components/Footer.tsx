import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Phone, Mail, MapPin, CircleArrowRight } from 'lucide-react';

const FooterMain: React.FC = () => {
    return (
        <div className="py-8">
            <footer className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-4">
                <Link href={"https://www.instagram.com/desbravadoreshomeadventure/"}>
                    <div className="flex items-center mb-4 md:mb-0">
                        <Image
                            height={40}
                            width={40}
                            alt="home-adventure-logo"
                            src="/images/logo-home.jpg"
                            className="mr-2 h-10 w-10 rounded-md shadow-lg"
                        />
                        <span className="text-2xl font-semibold">Home Adventure</span>
                    </div>
                </Link>
                <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-0 mb-4 md:mb-0">
                    <div className="mr-8">
                        <h3 className="font-semibold text-lg mb-2">Rotas</h3>
                        <ul className="mt-4 space-y-4 mb-4">
                            {['Início', 'Galeria', 'Sobre', 'Eventos', 'Contato'].map((item) => (
                                <li key={item} className="flex items-center">
                                    <Link href="#" className="text-black flex items-center hover:text-orange-500 transition-all ease-in-out duration-300">
                                        <CircleArrowRight className="mr-2 h-5 w-5" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Informações</h3>
                        <ul className="mt-2 space-y-4">
                            <li className="flex items-center">
                                <Phone className="mr-2" />
                                <Link href="#" className="text-black hover:text-orange-500 transition-all ease-in-out duration-300">
                                    Telefone
                                    <p className="text-sm text-gray-600">19 99999-8899</p>
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-2" />
                                <Link href="homeadventureclube@gmail.com" className="text-black hover:text-orange-500 transition-all ease-in-out duration-300">
                                    Email
                                    <p className="text-sm text-gray-600">homeadventureclube@gmail.com</p>
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <MapPin className="mr-2" />
                                <Link href="#" className="text-black hover:text-orange-500 transition-all ease-in-out duration-300">
                                    Local de Encontro
                                    <p className="text-sm text-gray-600">Rua Jandaia do Sul, 111 - Jardim Ipe III, Mogi Guaçu</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="text-center mt-8">
                <p className="text-sm md:text-base text-black">© Home Adventure — 2024. Todos os Direitos Reservados. Desenvolvido por Victor Junqueira.</p>
                <div className="flex justify-center space-x-6 mt-2">
                    <Link href="https://www.instagram.com/desbravadoreshomeadventure/" className="text-gray-600 hover:text-pink-500 transition duration-200" aria-label="Instagram">
                        <FaInstagram className="text-2xl" />
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-green-500 transition duration-200" aria-label="Diretor do Clube">
                        <FaWhatsapp className="text-2xl" />
                    </Link>
                    <Link href="https://github.com/VictorJunqueira1" className="text-gray-600 hover:text-black transition duration-200" aria-label="GitHub">
                        <FaGithub className="text-2xl" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FooterMain;