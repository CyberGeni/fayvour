/* eslint-disable react-refresh/only-export-components */
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import CustomCursor from "./CustomCursor";
import { gsap } from "gsap";
import { useEffect } from "react";

const Layout = () => {
useEffect(() => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".lightCyan-slider", {
  x: "-10%",
  duration: 1,
});

tl.to(
  ".persianGreen-slider",
  {
    x: "-20%",
    duration: 1.5,
  },
  "-=1"
);

tl.to(
  ".white-slider",
  {
    x: "-30%",
    duration: 1.5,
  },
  "-=1"
);

tl.to(".hide", {
  x: "0%",
  duration: 2,
  opacity: 1,
});

tl.to(".preloader", {
  x: "200%",
  duration: 3,
});

tl.fromTo(
  "nav",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  },
  "-=2"
);

tl.fromTo(
  ".main",
  {
    opacity: 0,
    y: -20,
  },
  {
    opacity: 1,
    duration: 1,
    y: 0,
  },
  "-=1.5"
);

  tl.play();
}, []);

  return (
    <>
      {/* ps: this preloader was created courtesy Israel Mitolu's GSAP tutorial on Medium, huge thanks */}

      {/* preloader */}
      <div className="preloader  bg-[#5f6a7d] fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="prl-logo z-[2]">
          <div className="hide opacity-0 text-white space-y-3">
            <h1 className="font-athletics font-semibold text-3xl tracking-wider uppercase overflow-hidden">Favour Ajefu</h1>
            <h3 className="font-athletics">PRODUCT DESIGNER</h3>
          </div>
        </div>
        <div className="lightCyan-slider bg-gray-300 fixed top-0 left-0 w-full h-full -translate-x-full"></div>
        <div className="persianGreen-slider bg-[#101828] fixed top-0 left-0 w-full h-full -translate-x-full"></div>
        <div className="white-slider fixed top-0 left-0 w-full h-full -translate-x-full"></div>
      </div>

      <div className="main relative">
        <Navbar />
        <Outlet />
        <Footer />
        <CustomCursor />
      </div>
    </>
  );
};

export default Layout;
