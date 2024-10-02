import Link from 'next/link';
import React from 'react';

const images = [
  '/images/mountain.jpg', // Imagem da esquerda
  '/images/mountain.jpg', // Primeira imagem no topo à direita
  '/images/mountain.jpg', // Segunda imagem no topo à direita
  '/images/mountain.jpg', // Imagem inferior à direita
];

const Gallery: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12" id='gallery'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {/* Imagem ocupando toda a coluna esquerda */}
        <div className="col-span-2">
          <img
            src={images[0]}
            alt="Image 1"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Imagens da direita */}
        <div className="grid grid-rows-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={images[1]}
              alt="Image 2"
              className="object-cover w-full h-full"
            />
            <img
              src={images[2]}
              alt="Image 3"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src={images[3]}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <Link href={"gallery"}>
        <button
          className='mt-2 bg-orange-500 hover:bg-orange-600 rounded-md hover:scale-110 duration-300 transition px-5 py-3 text-white'
        >
          Ver mais
        </button>
      </Link>
    </section>
  );
};

export default Gallery;