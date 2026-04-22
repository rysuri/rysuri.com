import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import VideoSection from "../components/VideoSection";
import CommentSection from "../components/CommentSection";

const CONSTRAINED = "max-w-[1092px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-0";

function Home() {
  useEffect(() => {
    document.title = "Ry Suriyathep | Software Engineer";
  }, []);

  return (
    <div>
      {/* Hero sits above the nav */}
      <div className={CONSTRAINED}>
        <HeroSection />
      </div>

      {/* Sections — each has its own id for scroll targeting */}
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />

      <VideoSection />

      {/* Comments */}
      <div id="comments">
        <div className={CONSTRAINED}>
          <CommentSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
