import React from "react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Developer Tips",
    description: "Get practical advice and shortcuts for modern web development.",
    icon: <span>💡</span>,
  },
  {
    title: "Tech Reviews",
    description: "Honest reviews of tools, frameworks, and libraries.",
    icon: <span>🛠️</span>,
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides to help you build real-world projects.",
    icon: <span>📘</span>,
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-blue-400 py-10 px-4 shadow-md text-white">
      <h2 className="text-3xl font-bold text-center mb-8">What You'll Find Here</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
          key={index}
          className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-sm hover:scale-105 transition-transform"
        >
          <div className="text-4xl mb-3 text-white">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-slate-600">{feature.title}</h3>
          <p className="text-sm text-slate-600">{feature.description}</p>
        </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
