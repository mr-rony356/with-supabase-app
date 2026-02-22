"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Popular", href: "/" },
  { name: "Pizzas", href: "/category/pizzas" },
  { name: "Steaks", href: "/category/steaks" },
  { name: "Salads", href: "/category/salads" },
  { name: "Pastas", href: "/category/pastas" },
  { name: "Sandwiches", href: "/category/sandwiches" },
  { name: "Soups", href: "/category/soups" },
  { name: "Desserts", href: "/category/desserts" },
];

export function CategoryNavigation() {
  const pathname = usePathname();

  return (
    <nav className="-mx-3 flex gap-2 overflow-x-auto px-3 pb-2 scrollbar-hide sm:mx-0 sm:px-0">
      {categories.map((category) => {
        const isActive =
          pathname === category.href ||
          (category.href !== "/" && pathname.startsWith(category.href));
        return (
          <Link
            key={category.name}
            href={category.href}
            className={cn(
              "whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-mint-green text-white"
                : "bg-white text-body-text hover:bg-light-mint/30",
            )}
          >
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
}
