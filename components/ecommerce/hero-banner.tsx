import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const heroSlides = [
  {
    id: 1,
    title: "Lunch Set Box",
    description:
      "Discounted Food with Drinks, in brand new colors and your favorite fits.",
    ctaText: "Order for $9.99",
    ctaHref: "/products/lunch-set",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop&q=80",
  },
];

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

export function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden rounded-lg sm:rounded-xl">
      <div className="relative aspect-[4/3] w-full sm:aspect-[21/9] md:aspect-[3/1]">
        <Image
          src={heroSlides[0].image}
          alt={heroSlides[0].title}
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-green/85 to-dark-green/40" />
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-xl sm:max-w-2xl">
            <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {heroSlides[0].title}
            </h1>
            <p className="mt-2 line-clamp-2 text-base text-white/95 sm:mt-3 sm:text-lg">
              {heroSlides[0].description}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-4 bg-mint-green hover:bg-mint-green/90 text-white sm:mt-6"
            >
              <Link
                href={heroSlides[0].ctaHref}
                className="flex items-center gap-2"
              >
                {heroSlides[0].ctaText}
                <ChevronRight className="h-5 w-5 shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-3 right-3 flex gap-1.5 sm:bottom-4 sm:right-4 sm:gap-2 md:bottom-6 md:right-6">
          <button
            type="button"
            className="rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
