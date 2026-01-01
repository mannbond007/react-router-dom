import React from "react";

const Computer = () => {
  const features = [
    {
      title: "Desktop-first workflows",
      description:
        "Designed for productivity-heavy use cases with large screens and precision interactions.",
    },
    {
      title: "Scalable architecture",
      description:
        "A modular, maintainable codebase built to support complex desktop systems.",
    },
    {
      title: "Advanced UI patterns",
      description:
        "Powerful layouts, dashboards, and interactions optimized for desktop environments.",
    },
    {
      title: "Performance at scale",
      description:
        "Efficient rendering and state management for data-intensive applications.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-black via-[#12001F] to-black text-white">
      
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-purple-600/12 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center mb-5 px-4 py-1.5 rounded-full 
                          bg-purple-500/10 border border-purple-500/25 backdrop-blur-md">
            <span className="text-sm font-medium text-purple-400 tracking-wider">
              DESKTOP PRODUCT
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Desktop experiences
            <span className="block bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              built for scale and precision
            </span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed">
            A desktop-focused product engineered for power users, complex
            workflows, and high-performance business applications.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                rounded-xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-md
                p-6
                transition
                hover:border-purple-500/40
                hover:-translate-y-1
              "
            >
              <div className="mb-4 h-9 w-9 rounded-full bg-purple-500/15 
                              flex items-center justify-center 
                              text-purple-400 font-semibold">
                {index + 1}
              </div>

              <h3 className="text-lg font-medium text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-white/65 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Engagement / Credibility Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Designed for professional environments
            </h3>
            <p className="text-white/70 leading-relaxed max-w-xl">
              This desktop product is built with real-world usage in mind —
              focusing on performance, clarity, and maintainability for teams
              that rely on precision and scale.
            </p>
          </div>

          <div className="rounded-2xl border border-purple-500/20 
                          bg-purple-500/10 backdrop-blur-md p-8">
            <ul className="space-y-4 text-white/70">
              <li>• Data-heavy UI optimization</li>
              <li>• Clean state management patterns</li>
              <li>• Scalable layout systems</li>
              <li>• Long-term maintainability focus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Computer;
