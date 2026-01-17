import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartItem } from "./CartItem";

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartPopup({ isOpen, onClose }: CartPopupProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed right-4 top-16 z-50 w-[360px] rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <ShoppingCartOutlinedIcon fontSize="small" />
            Cart Summary
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        {/* Items */}
        <div className="max-h-[420px] overflow-y-auto px-4 py-3 space-y-4">
          <CartItem
            title="Premium Organic Orange - 1KG"
            price="£ 20"
            quantity={1}
            image="/images/orange.png"
            inStock
          />

          <CartItem
            title="Almarai Fresh Full Fat Milk - 1.5"
            price="£ 78.50"
            quantity={1}
            image="/images/milk.png"
            inStock
          />

          <CartItem
            title="Diet Bread - 5 Pieces"
            price="£ 24.95"
            quantity={2}
            image="/images/bread.png"
            inStock
          />

          <CartItem
            title="Zanaty White Eggs - 30 Pieces"
            price="£ 189"
            quantity={1}
            image="/images/eggs.png"
            inStock={false}
          />
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>£ 555.45</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>£ 25</span>
          </div>

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>£ 580.45</span>
          </div>

          <button className="mt-3 w-full rounded-lg bg-blue-900 py-2 text-white text-sm">
            Continue Checkout
          </button>
        </div>
      </div>
    </>
  );
}
