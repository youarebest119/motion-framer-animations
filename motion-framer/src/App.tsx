import { useEffect } from "react";
import Application from "./Application";
import { Toaster } from "react-hot-toast";
import Lenis from "@studio-freight/lenis";

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