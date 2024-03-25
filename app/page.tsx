'use client'
import { Hero } from "./components/Hero";
import { ProductSuggestion } from "./components/ProductSuggestion";
import { Process } from "./components/Process";
import { Articles } from "./components/Articles";
import { Slide } from "react-awesome-reveal";
import { PopupProvider, usePopup } from "@/context/PopupContext";
import './Estimation.css'
import EstimationComponent from "@/components/Estimation";
import { motion } from 'framer-motion';
import { Services } from "./components/Services";
import { CTA } from "./components/CTA";
import { JoinUs } from "./components/JoinUs";

export default function Home() {
  return (
    <PopupProvider>
      <Content />
    </PopupProvider>
  );
}

const Content = () => {
  const { showPopup } = usePopup();
  return (
    <>
      {showPopup && <EstimationComponent />}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
      </motion.div>
      <ProductSuggestion />
      <Services />
      <Process />
      <CTA />
      <JoinUs />
      {/* 
      <Slide damping={2} delay={200} cascade triggerOnce>
      </Slide>
      */}
      <Articles />
    </>
  )
}