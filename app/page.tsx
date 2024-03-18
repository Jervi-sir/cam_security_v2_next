'use client'

import { Hero } from "./components/Hero";
import { ProductSuggestion } from "./components/ProductSuggestion";
import { Process } from "./components/Process";
import { Articles } from "./components/Articles";
import { Header } from "../components/Header";
import { Slide } from "react-awesome-reveal";
import { useEffect } from "react";
import { getRandomData, supabaseClient } from "@/utils/supabase";

export default function Home() {



  return (
    <>
      <Hero />
      <ProductSuggestion />
      <Slide damping={2} delay={200} cascade triggerOnce>
        <Process />
      </Slide>
      <Articles />
    </>
  );
}
