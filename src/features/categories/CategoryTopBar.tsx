import { Search, SlidersHorizontal, Plus } from "lucide-react";

const CategoryTopBar = () => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col lg:flex-row gap-4 justify-between items-center mb-10">
      
      {/* Search */}
      <div className="relative w-full lg:max-w-lg">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search on Category"
          className="w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 w-full lg:w-auto">
        <button className="flex items-center gap-2 px-5 py-3 border rounded-xl w-full lg:w-auto">
          <SlidersHorizontal size={18} />
          Filter
        </button>

        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--color-primary-btns)] text-white w-full lg:w-auto">
          <Plus size={18} />
          Add Product
        </button>
      </div>
    </div>
  );
};

export default CategoryTopBar;
