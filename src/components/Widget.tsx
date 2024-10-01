import React from 'react';
import Image from 'next/image';

const Widget = () => {
    return (
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
            {/* Coluna da imagem */}
            <div className="md:w-1/2">
                <div className="relative w-full h-80">
                    <Image
                        fill
                        src={"/images/campori-pic.jpg"}
                        alt="Experiência de Trilhas"
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="flex justify-between mt-4">
                    <div className="relative w-1/2 h-40 mr-2">
                        <Image
                            fill
                            src={"/images/campori-pic.jpg"}
                            alt="Imagem Secundária 1"
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="relative w-1/2 h-40 ml-2">
                        <Image
                            fill
                            src={"/images/campori-pic.jpg"}
                            alt="Imagem Secundária 2"
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Texto sobre os Desbravadores */}
            <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
                <h3 className="text-primary text-base font-semibold uppercase mb-2 text-orange-600">Por que escolher o clube de Desbravadores?</h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Transformando a vida das crianças e adolescentes</h2>
                <p className="text-muted-foreground mb-4">
                    O Clube de Desbravadores é uma oportunidade incrível para o desenvolvimento físico, mental, social e espiritual dos jovens. Aqui, eles aprendem a lidar com desafios, desenvolvem habilidades práticas e constroem valores para a vida toda.
                </p>
                <p className="text-muted-foreground mb-6">
                    Além de atividades ao ar livre, como caminhadas e acampamentos, os Desbravadores participam de projetos comunitários, cultivando o espírito de solidariedade. Cada atividade é uma lição de vida que incentiva a cidadania, o respeito ao próximo e o cuidado com a natureza.
                </p>
            </div>

            {/* Outras Informações */}
            <div className="md:w-1/3 md:ml-8 mt-6 md:mt-0">
                <div className="bg-card p-4 rounded-lg bg-black border border-orange-500 text-white shadow-md mb-4">
                    <h3 className="font-bold text-lg mb-2">Segurança em primeiro lugar</h3>
                    <p className="text-muted-foreground">
                        No clube, a segurança das crianças é sempre nossa maior prioridade, em todas as atividades realizadas.
                    </p>
                </div>
                <div className="bg-card p-4 rounded-lg bg-black border border-orange-500 text-white shadow-md mb-4">
                    <h3 className="font-bold text-lg mb-2">Atividades recomendadas</h3>
                    <p className="text-muted-foreground">
                        Oferecemos uma variedade de atividades que promovem o desenvolvimento completo dos nossos Desbravadores.
                    </p>
                </div>
                <div className="bg-card p-4 rounded-lg bg-black border border-orange-500 text-white shadow-md">
                    <h3 className="font-bold text-lg mb-2">Suporte contínuo</h3>
                    <p className="text-muted-foreground">
                        Nossos líderes estão sempre disponíveis para apoiar e guiar os Desbravadores em sua jornada de crescimento.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Widget;