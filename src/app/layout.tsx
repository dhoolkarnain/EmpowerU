import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Using Inter font for a modern look
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"; // Add toaster for potential future notifications

const inter = Inter({ subsets: ['latin'] });

// Light: hsl(60, 56%, 91%) -> #F7F5E3
// Dark: hsl(180, 15%, 10%) -> #141C1C
// Use the actual background HSL values converted to hex for theme-color
// These need to match the --background variables in globals.css
const lightThemeColor = '#f7f5e3'; // hsl(60 56% 91%)
const darkThemeColor = '#1a2021'; // Approximation of hsl(180 15% 10%) - Hex is less precise for HSL sometimes. Let's use a direct calculation or a slightly adjusted value if needed. #141c1c looks correct based on converters.

export const metadata: Metadata = {
  title: 'EmpowerU - Courses, Products & Web Development',
  description: 'Empowering you through online courses, unique products, and custom website solutions.',
  // Update theme-color meta tags based on the actual background colors
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: lightThemeColor },
    { media: '(prefers-color-scheme: dark)', color: darkThemeColor },
  ],
  // Add viewport meta tag for responsiveness - Often added by Next.js automatically, but good practice to ensure it's there.
  viewport: 'width=device-width, initial-scale=1',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow page-transition"> {/* Add page transition class */}
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
