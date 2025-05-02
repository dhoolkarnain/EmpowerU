
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CourseCard } from '@/components/course-card';
import { ProductCard } from '@/components/product-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { ArrowRight, BookOpen, ShoppingBag, Users } from 'lucide-react';

// Sample Data (Replace with actual data fetching later)
const courses = [
  {
    title: 'Mastering Web Development',
    description: 'Comprehensive course covering HTML, CSS, JavaScript, React, and Node.js.',
    imageUrl: 'https://picsum.photos/seed/webdev/600/400',
    imageHint: 'web development code computer',
    price: 199.99,
    duration: '12 Weeks',
    category: 'Development',
  },
  {
    title: 'Digital Marketing Essentials',
    description: 'Learn SEO, social media marketing, and content strategy to grow online presence.',
    imageUrl: 'https://picsum.photos/seed/marketing/600/400',
    imageHint: 'digital marketing social media',
    price: 149.99,
    duration: '8 Weeks',
    category: 'Marketing',
  },
   {
    title: 'Graphic Design Fundamentals',
    description: 'Unlock your creativity with Adobe Photoshop and Illustrator basics.',
    imageUrl: 'https://picsum.photos/seed/design/600/400',
    imageHint: 'graphic design art tablet',
    price: 99.99,
    duration: '6 Weeks',
    category: 'Design',
  },
];

const products = [
  {
    title: 'EmpowerU Planner 2024',
    description: 'A daily planner designed to help you achieve your goals and stay organized.',
    imageUrl: 'https://picsum.photos/seed/planner/400/400',
    imageHint: 'planner journal book',
    price: 29.99,
    type: 'Journal',
  },
  {
    title: 'Minimalist Portfolio Template',
    description: 'Clean and modern website template for showcasing your work (React).',
    imageUrl: 'https://picsum.photos/seed/template/400/400',
    imageHint: 'website template design portfolio',
    price: 49.99,
    type: 'Template',
  },
  {
    title: 'The Freelancer\'s Guide',
    description: 'An e-book covering everything you need to start your freelance career.',
    imageUrl: 'https://picsum.photos/seed/ebook/400/400',
    imageHint: 'ebook book guide',
    price: 19.99,
    type: 'Book',
  },
];

const testimonials = [
  {
    quote: 'Working with EmpowerU on our website redesign was a fantastic experience. Highly recommend!',
    clientName: 'Jane Doe',
    clientTitle: 'CEO, Startup Inc.',
    avatarFallback: 'JD',
    rating: 5,
  },
  {
    quote: 'The digital marketing course provided actionable insights that significantly boosted our online engagement.',
    clientName: 'John Smith',
    clientTitle: 'Marketing Manager, Tech Solutions',
    avatarFallback: 'JS',
    rating: 5,
  },
  {
    quote: 'I finally launched my portfolio thanks to the easy-to-use website template. It looks incredibly professional.',
    clientName: 'Alice Green',
    clientTitle: 'Freelance Photographer',
    avatarFallback: 'AG',
    rating: 4,
  },
];


export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
           <Image
            src="https://picsum.photos/seed/empoweru_logo/150/150"
            alt="EmpowerU Logo"
            width={100}
            height={100}
            className="mx-auto mb-6 rounded-full shadow-md"
            data-ai-hint="abstract logo education"
           />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Welcome to EmpowerU
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Unlock your potential with our expert-led courses, unique digital products, and bespoke website development services.
          </p>
          {/* Updated button container for responsiveness */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              Explore Courses <BookOpen className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
              View Products <ShoppingBag className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
         <div className="text-center mt-12">
            <Button variant="link" className="text-accent text-lg">
                View All Courses <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
         </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-secondary/30">
       <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
           <Button variant="link" className="text-accent text-lg">
             Shop All Products <ArrowRight className="ml-1 h-5 w-5" />
           </Button>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          What Our Clients Say <Users className="inline-block ml-2 h-8 w-8" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

       {/* Call to Action (Optional) */}
       <section className="bg-primary text-primary-foreground">
         <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-semibold mb-4">Ready to Elevate Your Skills or Business?</h2>
           <p className="text-lg mb-6 max-w-2xl mx-auto">
             Get in touch for custom web development inquiries or browse our offerings.
           </p>
           <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
             Contact Us
           </Button>
         </div>
       </section>

    </div>
  );
}
