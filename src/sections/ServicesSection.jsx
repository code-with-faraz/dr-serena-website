export default function ServicesSection() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn practical tools to manage worry, tension, and overwhelm using cognitive-behavioral therapy (CBT) and mindfulness-based strategies.",
      image: "/assets/Anxiety.jpeg",
    },
    {
      title: "Relationship Counseling",
      description:
        "Build healthier communication, resolve conflict, and reconnect with your partner in a safe therapeutic space guided by evidence-based interventions.",
      image: "/assets/Relation.jpeg",
    },
    {
      title: "Trauma Recovery",
      description:
        "Heal from past trauma with care that focuses on safety, trust, and empowerment — using trauma-informed therapy techniques tailored to your needs.",
      image: "/assets/Trauma.jpeg",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white text-gray-800"> 
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 mb-14">
          Areas of focus
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover group-hover:scale-[1.02] transition-transform duration-300 rounded-t-xl"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
