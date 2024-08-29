import React from 'react';
import { FlameKindling, Footprints, TentTree } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white">
            <div
                className="absolute inset-0 w-full h-full bg-fixed"
                style={{ backgroundImage: "url('/Images/mountain.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}
            ></div>
            {/* Sobreposição */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Conteúdo */}
            <div className="relative z-10 text-center px-6">
                <h1 className="text-6xl font-bold">Home Adventure</h1>
                <p className="mt-4 text-lg max-w-xl mx-auto">
                    <div className='text-xl'>
                        <strong>Sinta a emoção de participar da </strong>
                        <span className='text-orange-600'>Home Adventure </span>
                    </div>
                    <p>Embarque em uma jornada inesquecível de exploração e aventura,
                        vivenciando a natureza como nunca!</p>
                </p>

                {/* Ícones */}
                <div className="mt-8 flex justify-center space-x-4">
                    <div className="p-4 bg-gray-700 rounded-md hover:bg-orange-600 duration-300">
                        <TentTree className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-4 bg-gray-700 rounded-md hover:bg-orange-600 duration-300">
                        <FlameKindling className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-4 bg-gray-700 rounded-md hover:bg-orange-600 duration-300">
                        <Footprints className="w-12 h-12 text-white" />
                    </div>
                </div>

                {/* Botão */}
                <button className="mt-8 px-6 py-3 bg-orange-500 text-lg font-semibold rounded-md shadow-md">
                    <Link href={"http://avisoshome.vercel.app"} /> Ver próximos eventos
                </button>
            </div>
        </div>
    );
};

export default HeroSection;