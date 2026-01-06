export default function WhyUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          Why Choose Us
        </h2>

        <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
          We focus on building websites that are not just visually appealing,
          but also fast, reliable, and business-focused.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="p-8 border border-slate-200 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-900">
              Fast & Responsive
            </h3>
            <p className="mt-3 text-slate-600">
              Optimized for speed and performance across all devices and screen sizes.
            </p>
          </div>

          <div className="p-8 border border-slate-200 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-900">
              Clean Modern Design
            </h3>
            <p className="mt-3 text-slate-600">
              Minimal, professional layouts that build trust and enhance usability.
            </p>
          </div>

          <div className="p-8 border border-slate-200 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-900">
              Business-Focused
            </h3>
            <p className="mt-3 text-slate-600">
              Every section is designed to support conversions and real-world goals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
