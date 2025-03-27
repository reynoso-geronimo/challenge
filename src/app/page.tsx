import CounterClient from "@/components/CounterClient";
import { fetchCounterValue } from "./actions";

export default async function Home() {
  const initialValue = await fetchCounterValue();

  return (
    <main className="container py-12 space-y-12">
      <h1 className="font-bold text-center text-4xl">WeSpeak Challenge</h1>
      <CounterClient initialValue={initialValue} />
    </main>
  );
}
