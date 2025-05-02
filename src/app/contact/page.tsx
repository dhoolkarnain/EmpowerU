import { ContactForm } from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our courses, products, or services, feel free to reach out using the form below or through our contact details.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-card p-6 md:p-8 rounded-lg shadow-md border border-border">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Send Us a Message</h2>
          <ContactForm />
        </div>

        {/* Contact Details */}
        <div className="space-y-6 bg-card p-6 md:p-8 rounded-lg shadow-md border border-border">
           <h2 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h2>
           <div className="flex items-start space-x-4">
             <div className="flex-shrink-0 mt-1">
                <MapPin className="h-6 w-6 text-accent" />
             </div>
             {/* Use overflow-hidden as a safety net, break-words handles most cases */}
             <div className="overflow-hidden">
                <h3 className="font-semibold">Our Office</h3>
                <p className="text-muted-foreground break-words">123 Education Lane<br />Knowledge City, ST 98765</p>
             </div>
           </div>
            <div className="flex items-start space-x-4">
             <div className="flex-shrink-0 mt-1">
                <Mail className="h-6 w-6 text-accent" />
             </div>
             {/* Apply overflow-hidden and break-words for email section */}
             <div className="overflow-hidden">
                <h3 className="font-semibold">Email Us</h3>
                <a href="mailto:info@empoweru.example.com" className="text-primary hover:underline block break-words">info@empoweru.example.com</a>
                <p className="text-sm text-muted-foreground">For general inquiries</p>
                <a href="mailto:support@empoweru.example.com" className="text-primary hover:underline mt-1 block break-words">support@empoweru.example.com</a>
                 <p className="text-sm text-muted-foreground">For support</p>
             </div>
           </div>
           <div className="flex items-start space-x-4">
             <div className="flex-shrink-0 mt-1">
                <Phone className="h-6 w-6 text-accent" />
             </div>
             {/* Apply overflow-hidden and break-words for phone section */}
             <div className="overflow-hidden">
                <h3 className="font-semibold">Call Us</h3>
                <a href="tel:+1234567890" className="text-primary hover:underline block break-words">+1 (234) 567-890</a>
                <p className="text-sm text-muted-foreground">Mon - Fri, 9am - 5pm EST</p>
             </div>
           </div>
            {/* Optional: Map Embed */}
            <div className="pt-4">
                <h3 className="font-semibold mb-2">Find Us Here</h3>
                {/* Replace with actual map embed or image */}
                 <div className="aspect-video bg-muted rounded-md border border-border flex items-center justify-center text-muted-foreground">
                    Map Placeholder
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
