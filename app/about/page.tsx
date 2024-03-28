import { BreadcumbWrapper } from "@/components/BreadcumbWrapper";
import { AboutSection } from "./AboutSection";
import { BlogSection } from "./BlogSection";
import { CounterSection } from "./CounterSection";
import { TestimonialSection } from "./TestimonialSection";
import { VideoSection } from "./VideoSection";
import { NoticeWrapper } from "@/components/NoticeWrapper";

export default function About() {
  return (
    <>
    <div className="th-cart-wrapper  space-top space-extra-bottom">
      <div className="container">
        <NoticeWrapper title="About Us" />

        <AboutSection />
        {/*<CounterSection />*/}
        {/*<VideoSection />*/}
        
        {/* <TestimonialSection /> */}
        {/* <BlogSection /> */}
      </div>
      </div>
    </>
  )
}