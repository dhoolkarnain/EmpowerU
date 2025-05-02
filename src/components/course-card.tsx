import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, DollarSign } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  price: number;
  duration: string;
  category: string;
}

export function CourseCard({ title, description, imageUrl, imageHint, price, duration, category }: CourseCardProps) {
  return (
    <Card className="overflow-hidden hover-lift flex flex-col h-full">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={imageHint}
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-xl">{title}</CardTitle>
            <Badge variant="secondary">{category}</Badge>
        </div>
        <CardDescription className="text-sm line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Clock className="mr-1.5 h-4 w-4" />
          <span>{duration}</span>
        </div>
         <div className="flex items-center text-lg font-semibold text-primary">
           <DollarSign className="mr-1 h-5 w-5" />
           <span>{price.toFixed(2)}</span>
         </div>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <BookOpen className="mr-2 h-4 w-4" /> Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
}
