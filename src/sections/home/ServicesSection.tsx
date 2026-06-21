export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4">Custom Software Development</h3>
                <p className="text-gray-500">Tailored software solutions to meet your unique business needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
                <p className="text-gray-500">Scalable and secure cloud infrastructure and services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
                <p className="text-gray-500">Comprehensive strategies to modernize your business processes.</p>
            </div>
        </div>
        </div>
    </section>
  );
}