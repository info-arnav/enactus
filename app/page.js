import Image from "next/image";
import MainBanner from "./MainBanner";
import StoryBanner from "./OurStory";
import Projects from "./Projects";

export default function Home() {
  return (
    <main>
      <MainBanner></MainBanner>
      <StoryBanner></StoryBanner>
      <Projects></Projects>
    </main>
  );
}
