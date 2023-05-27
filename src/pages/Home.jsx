import Marquee from "../components/Marquee";
import cta from "../assets/see-my-work.svg";
import "../App.css";
import Projects from "../components/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// import SplitType from 'split-type'
// import { gsap } from "gsap";
function Home() {


  return (
    <>
      <div className="scroll-smooth bg-[#EBEAED] flex justify-start  flex-col h-[90vh] relative top-0">
        <div className="bg-white grid mt-16 h-[65vh] relative -left-[5vw] pl-[5vw] w-[110vw] rotate-[-5deg] overflow-hidden">
          {/* main content */}
          <Marquee />
          <div className=" px-[5%] sm:px-[7.5%] md:px-[10%] font-circular rotate-[5deg] grid grid-cols-1 sm:grid-cols-2 ">
            {/* text */}
            <div className="space-y-6 w-11/12 font-circular ">
              <h1 className="text-[#98A2B3] text-5xl sm:text-6xl font-medium">
                Yo, I&apos;m Favour. 👋🏾
              </h1>
              <p className="text-[#475467] text-lg max-w-lg">
                Picture a fusion of Media, Health tech, and Web 3 brilliance.
                That is what I bring to the table, making me the ideal catalyst
                for your business’ success.{" "}
              </p>
            </div>
            {/* button area */}
            {/* <div className="mx-auto my-auto bg-[#1D2939] rounded-full text-white w-24 h-24">SEE MY WORK </div>
             */}
            <a href="#work" className="relative right-[5vw] ">
              <img
                className="w-fit h-fit hover:scale-105 transition-transform mx-auto md:mr-0 "
                src={cta}
                alt=""
              />
            </a>

            {/* work area */}
          </div>
        </div>
      </div>

      {/* work area */}
      <section
        id="work"
        className="bg-[#101828] text-[#B5B5B5]/5 overflow-y-hidden"
      >
        <h1 data-aos="fade-in" id="work-text" className="opacity translate-y-24 transition-all font-athletics text-center text-9xl sm:text-[140px] md:text-[200px] lg:text-[240px] my-20 md:my-32 overflow-hidden">
          Work.
        </h1>
        <Projects />
      </section>
    </>
  );
}

export default Home;
