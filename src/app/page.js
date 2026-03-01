"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const LandingScene = dynamic(() => import("@/components/LandingScene"), {
  ssr: false,
  loading: () => (
    <div style={{ 
      width: "100%", 
      height: "100%", 
      background: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{ color: "#fff", fontSize: "1.2rem" }}>Chargement...</div>
    </div>
  ),
});

export default function HomePage() {
  const router = useRouter();
  const [zooming, setZooming] = useState(false);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleStart = () => {
    if (zooming) return;
    setZooming(true);
  };

  const handleFinish = () => {
    router.push("/qui-suis-je");
  };

  return (
    <main className="landing">
      <div className="center-wrapper">
        <h1 className="landing-title">PAPE BATHILY</h1>

        <div className="model-container">
          {isMounted && (
            <LandingScene zooming={zooming} onFinish={handleFinish} />
          )}
        </div>

        <button 
          className="start-button" 
          onClick={handleStart} 
          disabled={zooming || !isMounted}
        >
          Commencer
        </button>
      </div>
    </main>
  );
}