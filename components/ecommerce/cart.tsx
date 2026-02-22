import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';

interface CartItem {
  id: string;
  product: {
    id: string;
    name: string;
    price: number;
    image_url: string;
  };
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
}

export function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: CartProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        <div className="bg-[#064E3B] text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#065F46] rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center text-[#374151] py-12">
              <p className="text-lg">Your cart is empty</p>
              <p className="text-sm mt-2">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-[#F0FDF4] p-4 rounded-lg"
                >
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1F2937] mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-[#10B981] font-bold mb-2">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 bg-white rounded hover:bg-[#ECFDF5] transition-colors"
                      >
                        <Minus className="w-4 h-4 text-[#064E3B]" />
                      </button>

                      <span className="w-8 text-center font-medium text-[#1F2937]">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 bg-white rounded hover:bg-[#ECFDF5] transition-colors"
                      >
                        <Plus className="w-4 h-4 text-[#064E3B]" />
                      </button>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-[#ECFDF5]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-[#1F2937]">Total:</span>
              <span className="text-2xl font-bold text-[#10B981]">
                ${total.toFixed(2)}
              </span>
            </div>

            <Button onClick={onCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
