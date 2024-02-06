import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Application from "./Application";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
  }, [])
  return (
    <>
      <Toaster />
      <Application />
    </>
  )
}

export default App;