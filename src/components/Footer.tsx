import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FooterMain: React.FC = () => {
    return (
        <div className="py-8">
            <footer className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-4">
                <div className="flex items-center">
                    <Image
                        height={40}
                        width={40}
                        alt="home-adventure-logo"
                        src="/images/logo-home.jpg"
                        className="mr-2 h-10 w-10 rounded-md shadow-lg"
                    />
                    <span className="text-2xl font-semibold">Home Adventure.</span>
                </div>
                <div className="flex flex-col md:flex-row mt-4 md:mt-0">
                    <div className="mr-8">
                        <h3 className="font-semibold text-lg">Rotas</h3>
                        <ul className="mt-2 space-y-2">
                            {['Início', 'Galeria', 'Sobre', 'Contato', 'Eventos'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-black hover:text-orange-500 transition-all ease-in-out duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Informações</h3>
                        <ul className="mt-2 space-y-2">
                            {['Telefone', 'Email', 'Local de Encontro'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-black hover:text-orange-500 transition-all ease-in-out duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="text-center mt-8">
                <p className="text-sm text-black">© Home Adventure — 2024. Todos os Direitos Reservados. Desenvolvido por Victor Junqueira.</p>
                <div className="flex justify-center space-x-6 mt-2">
                    <Link href="#" className="text-gray-400 hover:text-gray-700 transition duration-200" aria-label="GitHub">
                        <FaGithub className="text-2xl" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-pink-500 transition duration-200" aria-label="Instagram">
                        <FaInstagram className="text-2xl" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-green-500 transition duration-200" aria-label="WhatsApp">
                        <FaWhatsapp className="text-2xl" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FooterMain;