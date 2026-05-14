import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ticker from "../components/Ticker";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-cream flex flex-col selection:bg-gold-soft selection:text-ink">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
      <Ticker />
      <Footer />
    </div>
  );
}
