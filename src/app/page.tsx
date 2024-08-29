"use client"

import HeroSection from "@/components/HeroSection";
import { NavigationMenuMain } from "@/components/NavigationMenu";

export const Page = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-7xl">
          <NavigationMenuMain />
        </div>
        <HeroSection />
        <div className="h-[1000px]">

        </div>
      </div>
    </>
  )
}

export default Page;