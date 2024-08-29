"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const components = [
    { title: "Início", href: "/", description: "Volte ao início da página." },
    { title: "Sobre", href: "/about", description: "Conheça mais sobre a história do clube." },
    { title: "Galeria", href: "/galery", description: "Confira fotos dos momentos mais marcantes vividos do nosso clube." },
    { title: "Contato", href: "/contact", description: "Entre em contato com um de nossos diretores." }
]

const pathfinder = [
    { title: "Notícias", href: "https://noticias.adventistas.org/pt/departamento/desbravadores/", description: "Confira as últimas notícias dos Desbravadores." },
    { title: "Encontre um Clube", href: "https://clubes.adventistas.org/br/", description: "Encontre um clube mais próximo a você." },
    { title: "Aplicativo", href: "https://www.adventistas.org/pt/desbravadores/aplicativo-oficial-dos-desbravadores/", description: "Obtenha o aplicativo dos desbravadores." }
]

export const NavigationMenuMain = () => {
    return (
        <div>
            {/* Mobile Menu */}
            <div className="block lg:hidden">
                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-between mb-8 px-6">
                <div className="flex-shrink-0">
                    <Image
                        width={75}
                        height={75}
                        alt="Logo"
                        src={"/images/logo-home.jpg"}
                        className="rounded-md mt-4"
                    />
                </div>
                <NavigationMenu>
                    <NavigationMenuList className="flex space-x-4 mt-4 px-10 xl:px-0">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home Adventure</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
                                    {components.map((component) => (
                                        <ListItem className="hover:bg-gray-100"
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Desbravadores</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
                                    {pathfinder.map((item) => (
                                        <ListItem className="hover:bg-gray-100"
                                            key={item.title}
                                            title={item.title}
                                            href={item.href}
                                        >
                                            {item.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="http://avisoshome.vercel.app" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Próximos Eventos
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium">{title}</div>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    }
)
ListItem.displayName = "ListItem"