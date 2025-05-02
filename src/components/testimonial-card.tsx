import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react'; // Assuming 5-star rating

interface TestimonialCardProps {
  quote: string;
  clientName: string;
  clientTitle: string; // e.g., CEO of Company, Freelancer
  avatarUrl?: string; // Optional avatar image
  avatarFallback: string; // Initials
  rating?: number; // Optional rating 1-5
}

export function TestimonialCard({ quote, clientName, clientTitle, avatarUrl, avatarFallback, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="border-primary/20 bg-card shadow-md h-full flex flex-col">
      <CardContent className="pt-6 pb-4 flex-grow">
         {rating && (
           <div className="flex mb-3">
             {Array.from({ length: 5 }).map((_, i) => (
               <Star
                 key={i}
                 className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
               />
             ))}
           </div>
         )}
        <p className="italic text-foreground/80">"{quote}"</p>
      </CardContent>
      <CardFooter className="flex items-center space-x-4 mt-auto border-t border-border pt-4">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={clientName} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{clientName}</p>
          <p className="text-sm text-muted-foreground">{clientTitle}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
