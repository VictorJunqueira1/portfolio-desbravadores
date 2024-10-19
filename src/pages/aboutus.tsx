import { NavigationMenuMain } from '@/components/NavigationMenu';
import React from 'react';
import "@/app/globals.css"
import AdventureSection from '@/components/AdventureSection';
import Image from 'next/image';
import { Timeline } from '@/components/Timeline';
import Guides from '@/components/Guides';
import FooterMain from '@/components/Footer';
import FAQ from '@/components/FAQ';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const Aboutus: React.FC = () => {
    return (
        <>
            <header className="mx-auto max-w-7xl">
                <NavigationMenuMain />
            </header>
            <div className="relative h-96 flex items-center justify-center text-white py-12 md:py-0">
                <div
                    className="absolute inset-0 w-full h-full bg-fixed"
                    style={{ backgroundImage: "url('/images/mountain.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
                </div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-7xl font-bold">Sobre nós</h1>
                    <div className="mt-4 text-lg max-w-xl mx-auto">
                        <div className='text-2xl mb-4 font-normal'>
                            <strong>Conheça um pouco mais sobre a <span className='text-orange-600'>Home Adventure </span></strong>
                        </div>
                        <Breadcrumb className='flex justify-center'>
                            <BreadcrumbList className='text-white text-xl'>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className='text-orange-400 font-semibold hover:text-orange-500'>Início</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className='flex items-center justify-center' />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#" className='hover:text-white'>Sobre Nós</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <AdventureSection
                title="Venha para a Aventura"
                subtitle="Sua porta de entrada para a aventura"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique impedit doloribus numquam voluptatem. Quidem debitis, ad maxime, commodi reiciendis sequi consequuntur odit assumenda quo et molestiae optio aperiam delectus eaque!"
                foundationDate={new Date('2019-12-01')}
                image={
                    <Image
                        src="/images/campori-pic.jpg"
                        alt="Imagem Campori 2023"
                        className="rounded-md"
                        width={9999}
                        height={9999}
                    />
                }
            />
            <div className="mx-auto max-w-7xl px-10 xl:px-0 mb-12">
                <Timeline />
                <Guides />
                <FAQ />
            </div>
            <FooterMain />
        </>
    );
};

export default Aboutus;