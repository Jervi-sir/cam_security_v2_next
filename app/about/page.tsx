import { BreadcumbWrapper } from "@/components/BreadcumbWrapper";
import { AboutSection } from "./AboutSection";
import { BlogSection } from "./BlogSection";
import { CounterSection } from "./CounterSection";
import { TestimonialSection } from "./TestimonialSection";
import { VideoSection } from "./VideoSection";

export default function About() {
  return (
    <>
      <BreadcumbWrapper title="About Us" />

      <AboutSection />
      <CounterSection />
      <VideoSection />
      
      {/* <TestimonialSection /> */}
      {/* <BlogSection /> */}
    </>
  )
}