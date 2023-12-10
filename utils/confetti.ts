import confetti from "canvas-confetti";
import { randomBetween } from "./random";

export const fireConfetti = () => {
  confetti({
    startVelocity: 30,
    spread: 360,
    ticks: 600,
    zIndex: 100,
    particleCount: 165,
    origin: {
      x: randomBetween(0.3, 0.7),
      y: randomBetween(0.35, 0.83),
    },
  });
};

export const celebrate = () => {
  const duration = 4 * 1000;
  const animationEnd = Date.now() + duration;

  const interval: any = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    fireConfetti();
  }, 300);
};
