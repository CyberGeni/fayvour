import Marquee from "../components/Marquee";
import cta from "../assets/see-my-work.svg";
import "../App.css";
function Home() {
  return (
    <div className=" bg-[#EBEAED] flex justify-start  flex-col h-[90vh] relative top-0">
      <div className="bg-white grid mt-16 h-[60vh] relative -left-[5vw] pl-[5vw] w-[110vw] rotate-[-5deg] overflow-hidden">
        {/* main content */}
        <Marquee />
        <div className=" px-[5%] sm:px-[7.5%] md:px-[10%] font-circular rotate-[5deg] grid grid-cols-1 sm:grid-cols-2 ">
          {/* text */}
          <div className="space-y-6 w-11/12 font-circular ">
            <h1 className="text-[#98A2B3] text-5xl sm:text-6xl font-medium">Yo, I&apos;m Favour. 👋🏾</h1>
            <p className="text-[#475467] text-lg max-w-lg">
              Picture a fusion of Media, Health tech, and Web 3 brilliance. That
              is what I bring to the table, making me the ideal catalyst for
              your business’ success.{" "}
            </p>
          </div>
          {/* button area */}
          {/* <div className="mx-auto my-auto bg-[#1D2939] rounded-full text-white w-24 h-24">SEE MY WORK </div>
           */}
           <div className="relative right-[5vw]">
            <img className="animate-[spin_5s_ease_infinite] hover:scale-110 transition-transform mx-auto" src={cta} alt="" />
           </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
