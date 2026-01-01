import React from "react";

const Product = () => {
  const products = [
    {
      title: "Authentication Platform",
      description:
        "A secure, production-ready authentication system with role-based access, email verification, and JWT handling.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    },
    {
      title: "AI Tool Directory",
      description:
        "A curated platform for discovering real-world AI tools, built with performance and usability in mind.",
      tech: ["React", "API Integration", "UI/UX"],
    },
    {
      title: "Dashboard & Analytics",
      description:
        "A modern dashboard with clean data visualization and scalable architecture for business insights.",
      tech: ["React", "Charts", "Performance"],
    },
    {
      title: "Authentication & Access Control",
      description:
        "A secure authentication system with JWT-based access, role management, and email verification built for production use.",
      tech: ["React", "Node.js", "JWT", "MongoDB"],
    },
    {
      title: "AI Tool Discovery Platform",
      description:
        "A curated platform for discovering real-world AI tools, featuring clean UI, fast search, and category-based exploration.",
      tech: ["React", "API Integration", "UI/UX"],
    },
    {
      title: "SaaS Admin Panel",
      description:
        "A scalable admin dashboard with user management, analytics, and role-based permissions for SaaS products.",
      tech: ["React", "RBAC", "Dashboards"],
    },
  ];

  return (
    <section className="relative overflow-hidden py-22 bg-gradient-to-b from-black via-[#12001F] to-black text-white">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/15 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Header */}
        <div className="max-w-3xl mb-8 mt-8">
          <div
            className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full 
                bg-purple-500/10 border border-purple-500/25 backdrop-blur-md"
          >
            <p className="text-sm font-medium text-purple-400 tracking-wider">
              PROJECTS
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Real products,
            <span className="block bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              built for real users
            </span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed">
            A selection of projects focused on scalability, performance, and
            clean user experience. Each product is built with production
            standards and long-term maintainability in mind.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 transition hover:border-purple-500/30"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {product.title}
              </h3>

              <p className="text-white/65 text-sm mb-5 leading-relaxed">
                {product.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {product.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
