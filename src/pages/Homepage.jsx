import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { IntroImage } from "../components/Intro-Image";
import { HorizontalImage } from "../components/HorizontalImage";
import { ProductPresentation } from "../components/ProductPresentation";
import { ButterbeerRowImage } from "../components/butterbeer-row-image";
import { Products } from "../components/Products";
import { SpellworthFamily } from "../components/SpellworthFamily";
import { Estate } from "../components/Estate";
import { Footer } from "../components/Footer";
import { SpellworthClients } from "./SpellworthClients";

export const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout); // Use clearTimeout to clear the timeout
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          {" "}
          <Header />
          <IntroImage />
          <HorizontalImage />
          <ProductPresentation />
          <ButterbeerRowImage />
          <Products />
          <SpellworthFamily />
          <Estate />
          <Footer />
        </>
      )}
    </>
  );
};
