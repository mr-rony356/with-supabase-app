"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/lib/types/product";

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <Card className="group overflow-hidden border-0 bg-white shadow-md transition-shadow hover:shadow-lg ">
      <div className="relative aspect-square overflow-hidden h-72">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        {product.tag && (
          <Badge
            variant="destructive"
            className="absolute right-2 top-2 border-0"
          >
            {product.tag}
          </Badge>
        )}
      </div>
      <CardContent className="p-3 sm:p-4">
        <p className="text-lg font-semibold text-price-green">
          Tk {product.price.toFixed(0)}00
        </p>
        <h3 className="mt-1 font-semibold text-body-text">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-body-text/80">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-3 pt-0 sm:p-4">
        <Button
          className="w-full bg-mint-green hover:bg-mint-green/90 text-white"
          size="lg"
          onClick={() => addItem(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4 shrink-0" />
          Add to basket
        </Button>
      </CardFooter>
    </Card>
  );
}
