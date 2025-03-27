"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { updateCounterValue } from "../src/app/actions";

interface CounterClientProps {
  value: number;
  children: React.ReactNode;
}

export default function CounterClient({ value, children }: CounterClientProps) {
  const updateCounter = async (amount: number) => {
    const newValue = value + amount;

    await updateCounterValue(newValue);
  };

  return (
    <div className="flex items-center justify-center gap-4 w-full">
      <Button onClick={() => updateCounter(-1)} size={"icon"}>
        <Minus />
      </Button>
      {children}
      <Button onClick={() => updateCounter(1)} size={"icon"}>
        <Plus />
      </Button>
    </div>
  );
}
