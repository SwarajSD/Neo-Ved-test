"use client";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
        },
        particles: {
          color: { value: "#3b82f6" }, // Blue particles
          links: { color: "#3b82f6", distance: 150, enable: true },
          move: { enable: true },
          number: { density: { enable: true }, value: 80 },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
};