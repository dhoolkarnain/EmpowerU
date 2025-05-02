
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'; // Example social icons

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/20 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} EmpowerU. All rights reserved.
          </p>

          {/* Social Links (Optional) */}
          <div className="flex space-x-4">
            <Link href="#" passHref>
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" passHref>
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" passHref>
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
             <Link href="#" passHref>
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
               <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
         {/* Optional: Footer Nav */}
         <nav className="mt-6 pt-6 border-t border-border flex flex-wrap justify-center gap-x-6 gap-y-2">
             <Link href="/#courses" className="text-sm text-muted-foreground hover:text-primary">Courses</Link>
             <Link href="/#products" className="text-sm text-muted-foreground hover:text-primary">Products</Link>
             <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
             <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
             <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
         </nav>
      </div>
    </footer>
  );
}
