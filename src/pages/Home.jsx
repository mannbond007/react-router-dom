import { Brain, LayoutDashboard, Sparkles } from "lucide-react";
import React from "react";
import Pricing from "./Pricing";

const Home = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <style>
        {`
            
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

                * {
                    font-family: "Poppins", sans-serif;
                }`}
      </style>
      <section className="flex flex-col items-center bg-gradient-to-b from-black to-[#3B006E] text-white px-4 pb-10">
        <nav className="flex items-center justify-between py-3 md:px-16 lg:px-24 xl:px-32 md:py-4 w-full">
          {/* <a href="https://prebuiltui.com">
                        <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924m-7.196 5.32V14.56h3.08v3.612l-.532 3.276.532 3.248V33.6zm6.692-8.232q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128t.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.868.504 1.988.504M56.95 28V14.56h3.08V28zm3.08-7.476-1.064-.532q0-2.548 1.12-4.116 1.148-1.596 3.444-1.596 1.008 0 1.82.364.812.365 1.512 1.176l-2.016 2.072a2.1 2.1 0 0 0-.812-.56 3 3 0 0 0-1.036-.168q-1.287 0-2.128.812-.84.811-.84 2.548m14.156 7.756q-2.016 0-3.64-.896a7 7 0 0 1-2.548-2.52q-.924-1.596-.924-3.584t.924-3.556a6.87 6.87 0 0 1 2.492-2.52q1.596-.924 3.528-.924 1.876 0 3.304.868a6.05 6.05 0 0 1 2.268 2.38q.84 1.512.84 3.444 0 .336-.056.7a7 7 0 0 1-.112.756H69.23v-2.52h9.436l-1.148 1.008q-.056-1.232-.476-2.072a3 3 0 0 0-1.204-1.288q-.756-.448-1.876-.448-1.176 0-2.044.504a3.43 3.43 0 0 0-1.344 1.428q-.476.896-.476 2.156t.504 2.212 1.428 1.484q.924.504 2.128.504 1.037 0 1.904-.364a4 4 0 0 0 1.512-1.064l1.96 1.988a6.3 6.3 0 0 1-2.38 1.736 7.6 7.6 0 0 1-2.968.588m15.91 0q-1.54 0-2.745-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.821 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.869 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.455.924-3.276.924M82.898 28V7.84h3.08v10.024l-.532 3.248.532 3.276V28zm6.692-2.632q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128.001 1.204.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.87.504 1.988.504m15.067 2.912q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.644.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.976-.28V14.56h3.08V28zm1.54-15.904q-.783 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.813 0 1.316.532t.504 1.316q0 .784-.504 1.316t-1.316.532M120.169 28V7.84h3.08V28zm8.552 0V8.96h3.08V28zm-3.22-10.64v-2.8h9.52v2.8zm17.274 10.92q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.643.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.977-.28V14.56h3.08V28zm1.54-15.904q-.785 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.812 0 1.316.532t.504 1.316-.504 1.316-1.316.532" fill="white" />
                            <path d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a> */}
          {/* <div id="menu" className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-black/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-sm`}>
                        <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-200 hover:text-gray-300">Home</a>
                        <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-200 hover:text-gray-300">Features</a>
                        <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-200 hover:text-gray-300">Pricing</a>
                        <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-200 hover:text-gray-300">Affiliate</a>

                        <button className="md:hidden bg-purple-600 hover:bg-purple-700 text-slate-50 px-10 h-10 rounded-full text-sm transition">
                            Submit
                        </button>
                        <button id="close-menu" onClick={() => setMobileOpen(false)} className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div> */}
          {/* <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-slate-50 px-10 h-10 rounded-full text-sm transition">
                        Submit
                    </button> */}

          {/* <button id="open-menu" onClick={() => setMobileOpen(true)}
                        className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 12h16" />
                            <path d="M4 18h16" />
                            <path d="M4 6h16" />
                        </svg>
                    </button> */}
        </nav>

        {/* Avatars + Stars */}
        <div className="flex items-center mt-32 mx-auto lg:mx-0">
          <div className="flex -space-x-3 pr-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]"
            />
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="user1"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="user2"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]"
            />
          </div>

          <div>
            <div className="flex ">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star text-transparent fill-[#FF8F20]"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                ))}
            </div>
            <p className="text-xs text-gray-200">Used by 10,000+ users</p>
          </div>
        </div>

        <h1 className="text-[42px]/13 md:text-6xl/19 font-semibold text-center max-w-[840px] mt-4 bg-gradient-to-r from-white to-[#5D009F] text-transparent bg-clip-text">
          One Directory. Thousands of AI Possibilities.
        </h1>
        <p className="text-gray-200 text-sm max-md:px-2 text-center max-w-sm mt-3">
          Unlock the perfect tools for automation, content, research, coding,
          and more.
        </p>

        <div className="mt-8 flex items-center text-sm bg-white h-13 border pl-3 pr-0.5 rounded-md border-gray-500/30 w-full max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-gray-400 shrink-0"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <input
            className="px-2 w-full h-full outline-none placeholder:text-gray-500 text-gray-500 bg-transparent rounded-lg"
            type="email"
            placeholder="Search for a product"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-10 h-11 font-medium text-sm rounded-lg"
          >
            Search
          </button>
        </div>

        <p className="text-gray-200 mt-4 text-sm">
          2000+ products and updating every day
        </p>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-0 mt-14">
          <div className="bg-linear-to-b from-[#2A0150] to-[#090025] hover:-translate-y-1 transition duration-300 border border-violet-900 rounded-lg p-6 space-y-4">
            <div className="flex items-start justify-between">
              <img
                className="w-12 h-12"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/figma.png"
                alt="figma"
              />
              <button className="bg-purple-950 text-xs text-slate-50 rounded-full px-4 py-2">
                New
              </button>
            </div>
            <p className="text-lg text-gray-50">Figma</p>
            <p className="text-sm text-gray-200">
              Let AI handle the repetitive, time-consuming tasks so your.
            </p>
          </div>
          <div className="bg-linear-to-b from-[#2A0150] to-[#090025] hover:-translate-y-1 transition duration-300 border border-violet-900 rounded-lg p-6 space-y-4">
            <img
              className="w-12 h-12"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/miro.png"
              alt="miro"
            />
            <p className="text-lg text-gray-50">Miro</p>
            <p className="text-sm text-gray-200">
              Empower your business by letting AI take over repetitive tasks.
            </p>
          </div>

          <div className="bg-linear-to-b from-[#2A0150] to-[#090025] hover:-translate-y-1 transition duration-300 border border-violet-900 rounded-lg p-6 space-y-4">
            <img
              className="w-12 h-12"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/webflow.png"
              alt="webflow"
            />
            <p className="text-lg text-gray-50">Webflow</p>
            <p className="text-sm text-gray-200">
              AI takes care of the repetitive stuff, so your team can focus.
            </p>
          </div>

          <div className="relative bg-linear-to-b from-[#2A0150] to-[#090025] hover:-translate-y-1 transition duration-300 border border-violet-900 rounded-lg p-6 space-y-4">
            <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 border border-purple-600/30">
              Coming Soon
            </span>

            <LayoutDashboard className="w-12 h-12 text-purple-400" />

            <p className="text-lg text-gray-50">Dashboard AI</p>
            <p className="text-sm text-gray-200">
              Intelligent dashboards with real-time AI insights.
            </p>
          </div>

          <div className="relative bg-linear-to-b from-[#2A0150] to-[#090025] hover:-translate-y-1 transition duration-300 border border-violet-900 rounded-lg p-6 space-y-4">
            <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 border border-purple-600/30">
              Coming Soon
            </span>

            <Sparkles className="w-12 h-12 text-purple-400" />

            <p className="text-lg text-gray-50">Creative AI</p>
            <p className="text-sm text-gray-200">
              Generate designs, content, and ideas effortlessly.
            </p>
          </div>

          <div className="relative bg-linear-to-b from-[#2A0150] to-[#090025] hover:-translate-y-1 transition duration-300 border border-violet-900 rounded-lg p-6 space-y-4">
            <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 border border-purple-600/30">
              Coming Soon
            </span>

            <Brain className="w-12 h-12 text-purple-400" />

            <p className="text-lg text-gray-50">Smart Analysis</p>
            <p className="text-sm text-gray-200">
              AI-powered analysis to help you make better decisions.
            </p>
          </div>
        </div>

        <div className="py-20 sm:py-24">
          <div
            className="
    inline-flex items-center
    px-6 py-3
    rounded-xl
    bg-purple-500/10
    backdrop-blur-md
    border border-purple-500/20
    shadow-[0_8px_24px_rgba(0,0,0,0.25)]
  "
          >
            <h1
              className="
      text-2xl md:text-3xl font-semibold
      bg-gradient-to-r from-white to-purple-400
      bg-clip-text text-transparent
      tracking-tight
    "
            >
            Pricing Section
            </h1>
          </div>

        </div>
          <div>
      <Pricing/>      
          </div>
      </section>
    </>
  );
};

export default Home;
