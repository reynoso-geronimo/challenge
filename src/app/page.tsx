"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchCounterValue, updateCounterValue } from "./action";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for up, -1 for down

  useEffect(() => {
    const getCounterValue = async () => {
      const value = await fetchCounterValue();
      setCounter(value);
    };
    getCounterValue();
  }, []);

  const increment = async () => {
    setDirection(1);
    const newValue = counter + 1;
    setCounter(newValue);
    await updateCounterValue(newValue);
  };

  const decrement = async () => {
    setDirection(-1);
    const newValue = counter - 1;
    setCounter(newValue);
    await updateCounterValue(newValue);
  };

  const variants = {
    initial: () => ({
      y: 0,
      opacity: 0,
    }),

    enter: (direction: number) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -20 : 20,
      opacity: 0,
    }),
  };

  return (
    <main className="container py-12 space-y-12">
      <h1 className="font-bold text-center text-4xl">WeSpeak Challenge</h1>
      <div className="flex items-center justify-center gap-4 w-full">
        <Button onClick={decrement}>
          <Minus />
        </Button>
        <div className="relative h-10 w-12 flex items-center justify-center overflow-hidden">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.span
              key={counter}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="text-2xl font-bold absolute"
            >
              {counter}
            </motion.span>
          </AnimatePresence>
        </div>
        <Button onClick={increment}>
          <Plus />
        </Button>
      </div>
    </main>
  );
}
