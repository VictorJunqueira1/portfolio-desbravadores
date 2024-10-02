import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const directors = [
    {
        name: "Maycon Pecolo",
        role: "Diretor do Clube",
        image: "/images/mountain.jpg",
        instagram: "https://instagram.com/maycon",
        whatsapp: "https://wa.me/123456789",
    },
    {
        name: "Luana Jheniffer",
        role: "Diretora do Clube",
        image: "/images/mountain.jpg",
        instagram: "https://instagram.com/luana",
        whatsapp: "https://wa.me/123456789",
    },
    {
        name: "Lucas Freitas",
        role: "Diretor do Clube",
        image: "/images/mountain.jpg",
        instagram: "https://instagram.com/lucas",
        whatsapp: "https://wa.me/123456789",
    },
    {
        name: "Guilherme Willie",
        role: "Diretor do Clube",
        image: "/images/mountain.jpg",
        instagram: "https://instagram.com/guilherme",
        whatsapp: "https://wa.me/123456789",
    },
];

const Guides: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8" id="contact">
            <h2 className="text-center text-2xl font-bold mb-4 text-orange-500">Nossos Diretores</h2>
            <h1 className="text-center text-4xl font-extrabold mb-8">Diretores e Líderes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {directors.map((director, index) => (
                    <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                        <div className="overflow-hidden transition-transform duration-300 hover:scale-105">
                            <Image
                                width={990}
                                height={990}
                                src={director.image}
                                alt={director.name}
                                className="w-full h-48 object-cover transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{director.name}</h3>
                            <p className="text-muted-foreground">{director.role}</p>
                            <div className="flex justify-center space-x-6 mt-2">
                                <Link href={director.instagram} className="text-gray-600 hover:text-pink-500 transition duration-200" aria-label="Instagram">
                                    <FaInstagram className="text-2xl" />
                                </Link>
                                <Link href={director.whatsapp} className="text-gray-600 hover:text-green-500 transition duration-200" aria-label="Diretor do Clube">
                                    <FaWhatsapp className="text-2xl" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Guides;