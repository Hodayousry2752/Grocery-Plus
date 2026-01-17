import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface CartItemProps {
  title: string;
  price: string;
  quantity: number;
  image: string;
  inStock: boolean;
}

export function CartItem({
  title,
  price,
  quantity,
  image,
  inStock,
}: CartItemProps) {
  return (
    <div className="flex gap-3">
      <img
        src={image}
        alt={title}
        className="h-12 w-12 rounded-md object-cover"
      />

      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>

        <span
          className={`inline-block mt-1 text-[10px] px-2 py-[2px] rounded-full ${
            inStock
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </span>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2 border rounded-full px-2 py-1">
            <button>
              <RemoveIcon fontSize="inherit" />
            </button>
            <span className="text-xs">{quantity}</span>
            <button>
              <AddIcon fontSize="inherit" />
            </button>
          </div>

          <span className="text-sm font-semibold">{price}</span>
        </div>
      </div>
    </div>
  );
}
