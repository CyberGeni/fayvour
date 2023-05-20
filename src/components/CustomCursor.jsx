import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import '../App.css'
const CustomCursor = () => {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  var posX = 0,
  posY = 0;

var mouseX = 0,
  mouseY = 0;

gsap.to({}, 0.016, {
repeat: -1,
onRepeat: function() {
  posX += (mouseX - posX) / 9;
  posY += (mouseY - posY) / 9;
  
 gsap.set(follower, {
      css: {    
      left: posX - 12,
      top: posY - 12
      }
  });
  
  gsap.set(cursor, {
      css: {    
      left: mouseX,
      top: mouseY
      }
  });
}
});

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    gsap.to(cursor.current, {
      x: clientX,
      y: clientY,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <div
      className=""
    >
      <div ref={cursor} className="cursor absolute bg-white w-1.5 h-1.5 rounded-full z-1 select-none pointer-events-none z-[10000] hover:opacity-[0.08] active:opacity-[0.5] scale-1 active:scale-0"></div>
      <div ref={follower} className="cursor-follower active:opacity-70 active:scale-[3] hover:opacity-[0.08]"></div>
    </div>
  );
};

export default CustomCursor;
