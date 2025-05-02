
"use client";

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"; // Added SheetHeader, SheetTitle
import { Menu, BookOpen, ShoppingBag, Users, Mail, Home } from "lucide-react"; // Added Home icon

const navLinks = [
  { href: "/", label: "Home", icon: Home }, // Added Home link
  { href: "/#courses", label: "Courses", icon: BookOpen },
  { href: "/#products", label: "Products", icon: ShoppingBag },
  { href: "/#testimonials", label: "Testimonials", icon: Users },
  { href: "/contact", label: "Contact", icon: Mail }, // Assuming a /contact page exists or will be created
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
           <Image
            src="https://picsum.photos/seed/empoweru_logo_sm/40/40" // Smaller logo for header
            alt="EmpowerU Logo"
            width={32}
            height={32}
            className="rounded-full"
            data-ai-hint="abstract logo education"
           />
          EmpowerU
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6 pt-4 flex flex-col"> {/* Added pt-4, flex flex-col */}
               {/* Added SheetHeader and SheetTitle */}
               <SheetHeader className="mb-4">
                 <SheetTitle className="text-left flex items-center gap-2">
                   <Image
                        src="https://picsum.photos/seed/empoweru_logo_sm/40/40"
                        alt="EmpowerU Logo"
                        width={28}
                        height={28}
                        className="rounded-full"
                        data-ai-hint="abstract logo education"
                    />
                    EmpowerU Menu
                 </SheetTitle>
               </SheetHeader>
              <div className="flex flex-col space-y-3 flex-grow"> {/* Reduced space-y */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 rounded-md p-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
