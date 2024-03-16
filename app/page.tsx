import Image from "next/image";
import { Hero } from "./components/Hero";
import { ProductSuggestion } from "./components/ProductSuggestion";
import { Process } from "./components/Process";
import { Articles } from "./components/Articles";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSuggestion />
      <Process />
      <Articles />
    </>
  );
}
