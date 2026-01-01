import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "About", path: "/about" },
  {
    name: "Product",
    children: [
      { name: "Mobile", path: "/product/mobile" },
      { name: "Computer", path: "/product/computer" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Auto-close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* MAIN BAR */}
      <div className="mx-4 md:mx-10 mt-4 flex items-center justify-between px-6 py-4 rounded-full bg-black/70 backdrop-blur-xl border border-slate-700 text-white">
        
        {/* LOGO */}
        <NavLink to="/" className="shrink-0">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="4.7" cy="16" r="4.7" fill="#d1d5db" />
            <circle cx="16" cy="4.7" r="4.7" fill="#d1d5db" />
            <circle cx="16" cy="27.3" r="4.7" fill="#d1d5db" />
            <circle cx="27.3" cy="16" r="4.7" fill="#d1d5db" />
          </svg>
        </NavLink>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-14 text-lg">

          {/* Normal links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-purple-400" : "text-white hover:text-purple-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/features"
            className={({ isActive }) =>
              isActive ? "text-purple-400" : "text-white hover:text-purple-400"
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-purple-400" : "text-white hover:text-purple-400"
            }
          >
            About
          </NavLink>

          {/* PRODUCT DROPDOWN (DESKTOP) */}
          <div className="relative group">
            <button className="text-white hover:text-purple-400 transition">
              Product
            </button>

            {/* Hover bridge */}
            <div className="absolute left-0 top-full h-4 w-full" />

            {/* Dropdown */}
            <div
              className="
                absolute left-1/2 -translate-x-1/2 top-full mt-4
                w-44
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                pointer-events-none group-hover:pointer-events-auto
                transition
                bg-black/90 backdrop-blur-xl
                border border-slate-800
                rounded-xl
                py-2
                z-50
              "
            >
              <NavLink
                to="/product/mobile"
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm transition ${
                    isActive
                      ? "text-purple-400"
                      : "text-white hover:bg-white/5"
                  }`
                }
              >
                Mobile
              </NavLink>

              <NavLink
                to="/product/computer"
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm transition ${
                    isActive
                      ? "text-purple-400"
                      : "text-white hover:bg-white/5"
                  }`
                }
              >
                Computer
              </NavLink>
            </div>
          </div>
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-full border border-slate-600 hover:bg-slate-800 transition">
            Contact
          </button>
          <NavLink
            to="/product"
            className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-slate-100 transition"
          >
            Get Started
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-xl"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden mx-4 mt-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-slate-800 py-6 px-6 flex flex-col gap-4 text-sm">
          <NavLink to="/" className="text-white">Home</NavLink>
          <NavLink to="/features" className="text-white">Features</NavLink>
          <NavLink to="/about" className="text-white">About</NavLink>

          <div className="flex flex-col gap-2">
            <span className="text-white/70">Product</span>
            <NavLink to="/product/mobile" className="ml-4 text-white/80 hover:text-purple-400">
              Mobile
            </NavLink>
            <NavLink to="/product/computer" className="ml-4 text-white/80 hover:text-purple-400">
              Computer
            </NavLink>
          </div>

          <button className="mt-4 px-5 py-2 rounded-full border border-slate-600 hover:bg-slate-800 transition">
            Contact
          </button>

          <NavLink
            to="/product"
            className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-slate-100 transition text-center"
          >
            Get Started
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
