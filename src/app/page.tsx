import About from "@/components/About";
import CarouselPage from "@/components/CarouselPage";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import RecentWorks from "@/components/RecentWorks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <RecentWorks></RecentWorks>
      <CarouselPage></CarouselPage>
      <Testimonials></Testimonials>
      <GetInTouch></GetInTouch>
    </>
  );
}
