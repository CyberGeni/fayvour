import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
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
          isHoveringLink
            ? "w-fit h-fit border-none"
            : "bg-[#EBEAED]"
        }`}
      >
        {isHoveringLink && (
          <div className={`w-20 h-20 text-container bg-[#ebeaed]/70 rounded-full flex items-center justify-center text-center overflow-hidden 
          ${isHoveringLink ? "" : ""}
          `}>
            <span className="text-xs font-athletics font-semibold uppercase text-center leading-snug">View project</span>
          </div>
        )}
      </div>
      {/* Content of the component */}
    </div>
  );
};

export default CustomCursor;
