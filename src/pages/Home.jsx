import Marquee from "../components/Marquee";
import cta from "../assets/see-my-work.svg";
import "../App.css";
import projects from "../projects";
function Home() {
  return (
    <>
      <div className="scroll-smooth bg-[#EBEAED] flex justify-start  flex-col h-[90vh] relative top-0">
        <div className="bg-white grid mt-16 h-[60vh] relative -left-[5vw] pl-[5vw] w-[110vw] rotate-[-5deg] overflow-hidden">
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
            <div className="relative right-[5vw]">
              <img
                className="hover:scale-105 transition-transform mx-auto"
                src={cta}
                alt=""
              />
            </div>

            {/* work area */}
          </div>
        </div>
      </div>

      {/* work area */}
      <section id="work" className="bg-[#101828] text-[#B5B5B5]/5 overflow-y-hidden">
        <h1 className="font-athletics text-center text-9xl sm:text-[140px] md:text-[200px] lg:text-[240px] my-20 md:my-32 overflow-hidden">Work.</h1>
        <div className="px-[5%] sm:px-[7.5%] md:px-[10%]">
            {projects.map((project) => (
              <div key={project.id} className="border-[#475467] border-t py-6 md:py-10 lg:py-12">
                <a href="" className="grid grid-cols-1 sm:grid-cols-3 gap-y-4">
                  <div className="col-span-2 space-y-3 md:space-y-5">
                    <h1 className="text-[#EBEAED] font-medium font-circular text-4xl md:text-5xl">{project.name}</h1>
                    <p className="text-[#D0D5DD]/80 text-lg sm:text-xl md:text-2xl font-athletics">{project.description}</p>
                    <div className="flex space-x-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[#475467] font-athletics px-2 py-1 border border-[#475467] rounded-full bg-transparent h-fit whitespace-nowrap text-sm md:text-base">{tag}</span>
                      ))}
                    </div>
                    <p className="text-[#D0D5DD] text-lg sm:text-xl md:text-2xl font-athletics">{project.year}</p>
                  </div>
                  <div className="col-span-1 order-first sm:order-none">
                    <img src={project.image} alt="" />
                  </div>
                </a>
              </div>  
            ))}
        </div>
      </section>
    </>
  );
}

export default Home;
