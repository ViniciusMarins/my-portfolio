import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/commons/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Layout from "./components/commons/Layout";
import { LanguageProvider } from "./language/LanguageContext";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { MagicCard } from "./components/MagicWrapper";
function App() {
  const [init, setInit] = useState(false);
  const location = useLocation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 0.5,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#10b981",
        },
        links: {
          color: "#10b981",
          distance: 190,
          enable: true,
          opacity: 0.4,
          width: 2,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 4, max: 6 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <>
        <MagicCard gradientSize={130} gradientColor="rgb(16 185 129 / 0.25)">
          <Particles
            id="tsparticles"
            className="particles-canvas pointer-events-none"
            options={options}
          />
          <LanguageProvider>
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Layout>
                      <About />
                    </Layout>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <Layout>
                      <Projects />
                    </Layout>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
              </Routes>
            </AnimatePresence>
          </LanguageProvider>
        </MagicCard>
      </>
    );
  }

  return <></>;
}

export default App;
