'use client'
import { Hero } from "./components/Hero";
import { ProductSuggestion } from "./components/ProductSuggestion";
import { Process } from "./components/Process";
import { Articles } from "./components/Articles";
import { Slide } from "react-awesome-reveal";
import { PopupProvider, usePopup } from "@/context/PopupContext";
import Estimation from "./estimation/page";
import './estimation/Estimation.css'

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
      {showPopup && <Estimation />}
      <Hero />
      <ProductSuggestion />
      <Slide damping={2} delay={200} cascade triggerOnce>
        <Process />
      </Slide>
      <Articles />
    </>
  )
}