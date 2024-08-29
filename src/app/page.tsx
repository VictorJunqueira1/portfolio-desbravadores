"use client"

import { NavigationMenuMain } from "@/components/NavigationMenu";

export const Page = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-7xl">
            <NavigationMenuMain />
        </div>
      </div>
    </>
  )
}

export default Page;