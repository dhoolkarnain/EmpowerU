import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, DollarSign } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  price: number;
  type: string; // e.g., Book, Journal, Template
}

export function ProductCard({ title, description, imageUrl, imageHint, price, type }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-lift flex flex-col h-full">
      <div className="relative w-full h-64"> {/* Increased height for product images */}
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="contain" // Use contain for product images maybe? or cover?
          className="p-4" // Add padding around the image within its container
          data-ai-hint={imageHint}
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-xl">{title}</CardTitle>
            <Badge variant="outline">{type}</Badge>
        </div>
        <CardDescription className="text-sm line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center text-lg font-semibold text-primary">
          <DollarSign className="mr-1 h-5 w-5" />
          <span>{price.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
          <ShoppingCart className="mr-2 h-4 w-4" /> Purchase
        </Button>
      </CardFooter>
    </Card>
  );
}
