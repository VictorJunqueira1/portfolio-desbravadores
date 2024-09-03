"use client";

import AdventureSection from "@/components/AdventureSection";
import HeroSection from "@/components/HeroSection";
import { NavigationMenuMain } from "@/components/NavigationMenu";

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
          image={<img src="/images/campori-pic.jpg" alt="Imagem Campori 2023" className="rounded-md" />}
        />
      </div>
    </>
  );
}

export default Page;