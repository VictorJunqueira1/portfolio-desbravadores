"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

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
            <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md lg:hidden">
                <Link href="/" className="text-xl font-bold text-gray-900">
                    Home Adventure
                </Link>
                <Sheet>
                    <SheetTrigger>
                        <span className="p-3">
                            <Menu size={24} className="text-gray-900" />
                        </span>
                    </SheetTrigger>
                    <SheetContent className="max-h-screen overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <div className="mt-4 space-y-4">
                            {components.map((component) => (
                                <Link
                                    key={component.title}
                                    href={component.href}
                                    className="block p-3 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    {component.title}
                                    <p className="text-sm text-gray-500">{component.description}</p>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-6 space-y-4">
                            {pathfinder.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="block p-3 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    {item.title}
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </Link>
                            ))}
                        </div>
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
                            <Link href="http://eventos-homeadventure.vercel.app" legacyBehavior passHref>
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
                            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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