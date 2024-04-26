import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Footer from "@/components/Footer";
import Section3 from "@/components/Section3";
import Section4ContactUs from "@/components/Section4ContactUs";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className=" main-body-section w-full  mx-auto ">
        <HeroSection />
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4ContactUs/>
      </div>
        <Footer/>
    </main>
  );
}
