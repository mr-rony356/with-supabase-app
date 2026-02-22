import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { href: "/shop", label: "Local Shop" },
  { href: "/about", label: "About us" },
  { href: "/careers", label: "Careers" },
  { href: "/account", label: "My Account" },
];

export function Footer() {
  return (
    <footer className="bg-dark-green text-white">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/90 transition hover:text-white sm:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="order-last text-center text-xs text-white/80 md:order-none sm:text-sm">
            Copyright © 1995-2025 Ecommerce-ui Inc. All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 bg-black hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/pages">Pages</Link>
            </Button>
            <Button
              size="sm"
              className="bg-mint-green hover:bg-mint-green/90 text-white"
              asChild
            >
              <Link href="/download" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
