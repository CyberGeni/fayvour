import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../App.css";

const CustomCursor = () => {
  // Create a ref for the follower element
  const follower = useRef(null);
  useEffect(() => {
    const followerElement = follower.current;

    // Add a mousemove event listener to the window
    function handleMouseMove(event) {
      // Get the current mouse position
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Use GSAP to animate the follower element
      gsap.to(followerElement, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    
    }
  }, [])
  




  return (
    <div className="">
      <div ref={follower} id="follower" className="ball w-4 h-4 border-2 border-[#101828] bg-[#EBEAED] pointer-events-none fixed top-0 left-0 rounded-full"></div>
    </div>
  );
};

export default CustomCursor;
