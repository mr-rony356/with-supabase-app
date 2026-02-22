import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

interface LocationCardProps {
  address: string;
  phone: string;
  image: string;
}

export function LocationCard({ address, phone, image }: LocationCardProps) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl">
      <Image
        src={image}
        alt={address}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        quality={75}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
      <div className="absolute inset-0 bg-dark-green/70 transition-opacity group-hover:bg-dark-green/80" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
        <div className="flex items-start gap-3 text-white">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-light-mint sm:h-5 sm:w-5" />
          <div className="min-w-0">
            <p className="font-medium">{address}</p>
            <p className="mt-1 flex items-center gap-2 text-sm text-white/90">
              <Phone className="h-4 w-4" />
              {phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
