export default function PromoBanner() {
  return (
    <section className="bg-white rounded-2xl p-10 flex items-center justify-between gap-10">
      <img
        src="/assets/images/vegetables.png"
        alt="Vegetables"
        className="w-[420px]"
      />

      <div>
        <span className="inline-block mb-4 bg-[var(--color-primary)] text-white px-4 py-2 rounded-full text-sm">
          Up to 30% off
        </span>

        <h2 className="text-3xl font-bold text-black mb-4">
          Organic Vegetables Everyday
        </h2>

        <p className="text-gray-500 mb-6 max-w-lg">
          Your online resource of healthy recipes. Lorem ipsum dolor sit amet
          consectetur.
        </p>

        <button className="bg-[var(--color-primary-btns)] text-white px-6 py-3 rounded-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
}
