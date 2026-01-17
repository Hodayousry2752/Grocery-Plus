interface Props {
  filters: any;
  setFilters: (val: any) => void;
}

const FiltersSidebar = ({ filters, setFilters }: Props) => {
  return (
    <aside className="w-64 bg-white rounded-xl p-5 border">
      <h3 className="font-semibold text-[var(--color-primary)] mb-4">
        Categories
      </h3>

      <div className="flex flex-col gap-2 text-sm">
        <button onClick={() => setFilters({ ...filters, category: "Fruits" })}>
          Fruits
        </button>
        <button
          onClick={() => setFilters({ ...filters, category: "Vegetables" })}
        >
          Vegetables
        </button>
      </div>

      <hr className="my-4" />

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={filters.inStock}
          onChange={(e) =>
            setFilters({ ...filters, inStock: e.target.checked })
          }
        />
        In Stock
      </label>
    </aside>
  );
};

export default FiltersSidebar;
