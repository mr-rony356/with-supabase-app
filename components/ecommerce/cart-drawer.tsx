"use client";

import { X, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

export function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem } =
    useCart();

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );


  return (
    <>
      <div
        className={` ${!isCartOpen ? '' : 'fixed inset-0 z-40 bg-black/50'}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <div
        className={`fixed right-0 top-0 z-50 transition-all duration-300 flex h-screen w-full max-w-md flex-col bg-white shadow-2xl ${!isCartOpen ? '-mr-[500px] animate-in slide-in-right' : '-mr-0'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between bg-dark-green p-6 text-white">
          <h2 className="text-xl font-bold sm:text-2xl">Shopping Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-lg p-2 transition-colors hover:bg-dark-green/80"
            aria-label="Close cart"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="py-12 text-center text-body-text">
              <p className="text-lg">Your cart is empty</p>
              <p className="mt-2 text-sm">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex gap-4 rounded-lg bg-bg-pale p-4"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 font-semibold text-body-text">
                      {item.product.name}
                    </h3>
                    <p className="mb-2 font-bold text-price-green">
                      Tk {item.product.price.toFixed(0)}00
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        className="rounded p-1 transition-colors hover:bg-white"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4 text-dark-green" />
                      </button>

                      <span className="w-8 text-center font-medium text-body-text">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        className="rounded p-1 transition-colors hover:bg-white"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4 text-dark-green" />
                      </button>

                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                        className="ml-auto rounded p-1 text-red-500 transition-colors hover:bg-red-50"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border bg-bg-pale p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-body-text">
                Total:
              </span>
              <span className="text-2xl font-bold text-price-green">
                Tk {total.toFixed(0)}00
              </span>
            </div>

            <Button
              className="w-full bg-mint-green hover:bg-mint-green/90"
              onClick={closeCart}
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
