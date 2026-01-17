const DiscountBanner = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto bg-[var(--color-primary)] rounded-xl text-white p-10 text-center">
        <h2 className="text-xl font-semibold mb-2">Winter Discount</h2>
        <p className="mb-6 text-sm">Get 60% off – Limited Time Offer</p>

        <button className="bg-white text-[var(--color-primary)] px-6 py-2 rounded-lg text-sm font-medium">
          Shop now
        </button>
      </div>
    </section>
  );
};

export default DiscountBanner;
