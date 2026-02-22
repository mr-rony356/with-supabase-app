"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { CartDrawer } from "./cart-drawer";

interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  const { itemCount, openCart } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 min-h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-3 sm:px-4 md:px-6">
          <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-dark-green sm:h-9 sm:w-9">
              <span className="text-base font-bold text-white sm:text-lg">
                B
              </span>
            </div>
            <span className="truncate font-semibold text-dark-green">
              AbirBhaiErShop
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {children}
            <Button
              size="sm"
              className="bg-mint-green px-2.5 sm:px-4 hover:bg-mint-green/90 text-white"
              onClick={openCart}
              aria-label={`My cart: ${itemCount} items`}
            >
              <ShoppingCart className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">My cart: {itemCount}</span>
            </Button>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  );
}
