import React from "react";

const About = () => {
  return (
    <section className="relative overflow-hidden py-22 bg-gradient-to-b from-black via-[#12001F] to-black text-white">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/15 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Header */}
        <div className="max-w-3xl mt-10 mb-10">
          <div
            className="
    inline-flex items-center mb-4
    px-4 py-1.5
    rounded-full
    bg-purple-500/10
    border border-purple-500/25
    backdrop-blur-md
  "
          >
            <span className="text-sm font-medium text-purple-400 tracking-wider">
              ABOUT TECHZION
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Building modern digital products
            <span className="block bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              with clarity and purpose
            </span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed">
            TechZion is focused on crafting high-quality, production-ready web
            solutions using modern technologies and clean design principles.
            Every product is built with scalability, performance, and real-world
            usability in mind.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: Story */}
          <div className="space-y-10">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Our Approach
              </h3>
              <p className="text-white/70 leading-relaxed">
                We believe great products are built at the intersection of
                thoughtful design, clean architecture, and reliable technology.
                Instead of chasing trends, we focus on solutions that scale,
                perform, and remain maintainable over time.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Technology & Craft
              </h3>
              <p className="text-white/70 leading-relaxed">
                Our stack is centered around modern frameworks and tools like
                React, Node.js, Tailwind CSS, and scalable backend systems —
                chosen for reliability, flexibility, and long-term value.
              </p>
            </div>
          </div>

          {/* Right: Values */}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              What we stand for
            </h3>

            <ul className="space-y-5">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                <p className="text-white/70">
                  <span className="text-white font-medium">
                    Quality over quantity
                  </span>{" "}
                  — every feature is built with intention.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                <p className="text-white/70">
                  <span className="text-white font-medium">
                    Scalable foundations
                  </span>{" "}
                  — systems designed to grow without friction.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                <p className="text-white/70">
                  <span className="text-white font-medium">
                    Clean user experience
                  </span>{" "}
                  — intuitive, fast, and distraction-free.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                <p className="text-white/70">
                  <span className="text-white font-medium">
                    Production-ready mindset
                  </span>{" "}
                  — built for real users, not demos.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                <p className="text-white/70">
                  <span className="text-white font-medium">
                    Performance & reliability
                  </span>{" "}
                  — optimized systems that stay fast and stable at scale.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
