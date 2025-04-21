import React from "react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Custom Web Development",
    description: "Modern, responsive websites tailored to your brand and goals.",
    icon: <span>🌐</span>,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive, user-friendly interfaces with a clean aesthetic.",
    icon: <span>🎨</span>,
  },
  {
    title: "Technical Consulting",
    description: "Helping you choose the right tools and architecture for your project.",
    icon: <span>🧠</span>,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-blue-400 py-20 px-6 shadow-md text-white ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Services I Offer</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow hover:scale-105 transition-transform"
          >
            <div className="text-4xl mb-3 text-white">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-slate-600">{service.title}</h3>
            <p className="text-sm text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
