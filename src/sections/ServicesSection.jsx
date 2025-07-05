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
    <section id="services" className="py-24 px-6 md:px-12 bg-[#fdfaf5] text-gray-900 divider-section">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-20">
          Areas of Focus
        </h2>

        <div className="grid gap-20 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              className="flex flex-col items-center text-center"
            >
              <div className="w-80 h-80 rounded-full overflow-hidden mb-10 flex items-center justify-center bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-7 leading-snug">
                {service.title}
              </h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
