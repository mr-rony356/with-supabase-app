import {
  Header,
  HeroBanner,
  ServiceCard,
  CategoryNavigation,
  ProductCard,
  LocationCard,
  Footer,
} from "@/components/ecommerce";
import { AuthButton } from "@/components/auth-button";
import { Bike, Package, UtensilsCrossed } from "lucide-react";
import { Suspense } from "react";
import {
  popularProducts,
  pizzaProducts,
  locations,
} from "@/lib/data/products";
import { hasEnvVars } from "@/lib/utils";
import { EnvVarWarning } from "@/components/env-var-warning";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Suspense fallback={null}>
        {!hasEnvVars && (
          <div className="border-b border-amber-200 bg-amber-50 px-4 py-2">
            <EnvVarWarning />
          </div>
        )}
      </Suspense>
      <Header>
        <Suspense fallback={null}>
          <AuthButton />
        </Suspense>
      </Header>
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl space-y-10 px-3 py-6 sm:space-y-12 sm:px-4 sm:py-8 md:px-6">
          <HeroBanner />

          <section className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <ServiceCard
              icon={Bike}
              title="Quick delivery"
              description="All you can do is just order and we can deliver within 5 mins"
            />
            <ServiceCard
              icon={Package}
              title="Easy pickup"
              description="Order ahead and pick up at your convenience"
            />
            <ServiceCard
              icon={UtensilsCrossed}
              title="Super Dine-in"
              description="Enjoy fresh meals in our cozy restaurant"
            />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-body-text sm:mb-4 sm:text-2xl">
              Most Popular
            </h2>
            <CategoryNavigation />
            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {popularProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-body-text sm:mb-4 sm:text-2xl">
              Our Pizzas
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {pizzaProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
