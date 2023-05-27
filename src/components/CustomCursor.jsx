import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const CustomCursor = () => {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const follower = useRef(null);

  useEffect(() => {
    const followerElement = follower.current;

    function handleMouseMove(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const elementBeneathCursor = document.elementFromPoint(mouseX, mouseY);
      setIsHoveringLink(
        elementBeneathCursor &&
          elementBeneathCursor.classList.contains("project-link")
      );

      gsap.to(followerElement, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHoveringLink]);

  return (
    <div className="">
      <div
        ref={follower}
        id="follower"
        className={`w-4 h-4 border-2 border-[#101828] pointer-events-none fixed top-0 left-0 rounded-full overflow-hidden ${
          isHoveringLink ? "w-fit h-fit border-none" : "bg-[#EBEAED]"
        }`}
      >
        <AnimatePresence>
          {isHoveringLink && (
            <motion.div
              key="project-link"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className={`w-24 h-24  bg-[#ebeaed]/75 rounded-full flex flex-col items-center justify-center text-center overflow-hidden
          `}
            >
              <span className="text-sm font-athletics font-semibold uppercase text-center leading-snug">
                View <br /> project
              </span>
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Content of the component */}
    </div>
  );
};

export default CustomCursor;
