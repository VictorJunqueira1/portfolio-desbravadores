"use client";

import AdventureSection from "@/components/AdventureSection";
import HeroSection from "@/components/HeroSection";
import { NavigationMenuMain } from "@/components/NavigationMenu";
import { Timeline } from "@/components/Timeline";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <header className="mx-auto max-w-7xl">
          <NavigationMenuMain />
        </header>
        <HeroSection />
        <AdventureSection
          title="Venha para a Aventura"
          subtitle="Sua porta de entrada para a aventura"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique impedit doloribus numquam voluptatem. Quidem debitis, ad maxime, commodi reiciendis sequi consequuntur odit assumenda quo et molestiae optio aperiam delectus eaque!"
          foundationDate={new Date('2019-12-01')}
          image={<Image src="/images/campori-pic.jpg" alt="Imagem Campori 2023" className="rounded-md" width={9999} height={9999} />}
        />
        <div className="mx-auto max-w-7xl px-10 xl:px-0 mb-12">
          <Timeline />
        </div>
      </div>
    </>
  );
}

export default Page;