import React from 'react';
import { FlameKindling, Footprints, TentTree } from 'lucide-react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center text-white py-12 md:py-0">
                <div
                    className="absolute inset-0 w-full h-full bg-fixed"
                    style={{ backgroundImage: "url('/images/mountain.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
                </div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-bold">Home Adventure</h1>
                    <div className="mt-4 text-lg max-w-xl mx-auto">
                        <div className='text-2xl mb-4'>
                            <strong>Sinta a emoção de participar da <span className='text-orange-600'>Home Adventure </span></strong>
                        </div>
                        <p>Embarque em uma jornada inesquecível de exploração e aventura,
                            vivenciando a natureza como nunca!</p>
                    </div>
                    <div className="mt-8 flex justify-center space-x-4">
                        <div className="p-4 bg-slate-800 rounded-md hover:bg-orange-600 duration-300 hover:scale-110">
                            <TentTree className="w-8 h-8 md:w-12 md:h-12 text-white" />
                        </div>
                        <div className="p-4 bg-slate-800 rounded-md hover:bg-orange-600 duration-300 hover:scale-110">
                            <FlameKindling className="w-8 h-8 md:w-12 md:h-12 text-white" />
                        </div>
                        <div className="p-4 bg-slate-800 rounded-md hover:bg-orange-600 duration-300 hover:scale-110">
                            <Footprints className="w-8 h-8 md:w-12 md:h-12 text-white" />
                        </div>
                    </div>
                    <Link href="http://eventos-homeadventure.vercel.app">
                        <div className='mt-8 px-6 py-3 bg-orange-600 hover:bg-orange-500 duration-300 text-lg font-semibold rounded-md shadow-md inline-block'>
                            Ver próximos eventos
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HeroSection;