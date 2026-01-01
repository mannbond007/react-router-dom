import React from "react";

const Features = () => {
  const featuresData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Secure by default",
      description:
        "Best practices baked in from day one to keep your data and users protected.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8"
        >
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      ),
      title: "Developer-friendly",
      description:
        "Clean architecture, readable code, and intuitive patterns that scale with your team.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
      title: "Scalable architecture",
      description:
        "Designed to scale effortlessly from small projects to large production systems.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8"
        >
          <path d="M8 12h8" />
          <path d="M12 8v8" />
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      ),
      title: "Seamless integrations",
      description:
        "Easily connect with APIs, services, and tools you already use in your workflow.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8"
        >
          <path d="M12 2v20" />
          <path d="M5 7h14" />
          <path d="M5 17h14" />
        </svg>
      ),
      title: "Production-ready by default",
      description:
        "Built with real-world standards so you can deploy with confidence from day one.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
      ),
      title: "Lightning-fast setup",
      description:
        "Launch production-ready pages in minutes with prebuilt components.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8"
        >
          <path d="M12 20v-6" />
          <path d="M6 20V10" />
          <path d="M18 20V4" />
        </svg>
      ),
      title: "Optimized performance",
      description:
        "Built with performance-first principles to ensure fast load times and smooth interactions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8"
        >
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
      ),
      title: "Pixel perfect",
      description: "Modern Figma-driven UI that translates to exact code.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8"
        >
          <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <circle cx="17.5" cy="17.5" r="3.5" />
        </svg>
      ),
      title: "Highly customizable",
      description: "Tailwind utility-first classes make customization trivial.",
    },
  ];

  return (
    <section className="pt-40 h-auto bg-black">
      {/* Header */}
      <div className="text-center">
        <p className="font-medium text-purple-400 px-4 py-1.5 rounded-full bg-purple-950 border border-purple-800 w-max mx-auto">
          Features
        </p>

        <h2 className="text-3xl font-semibold mt-4 text-white">
          Built for builders
        </h2>

        <p className="mt-2 text-slate-300 max-w-xl mx-auto">
          Components, patterns and pages — everything you need to ship.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-4 mt-12 px-4
        "
      >
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`rounded-xl ${
              index === 1
                ? "p-px bg-gradient-to-br from-purple-500/40 to-transparent"
                : "p-px"
            }`}
          >
            <div className="h-full w-full p-6 rounded-xl space-y-4 border border-white/10 bg-black/80 backdrop-blur-md transition hover:-translate-y-1">
              {feature.icon}
              <h3 className="text-base font-medium text-white">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
