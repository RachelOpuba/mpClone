import Hero from "@/components/Hero";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (

    <>
      <div className="w-full flex flex-col items-center">
        <Hero/>
        <HeroSlider/>
      </div>
    </>
   
  );
}
