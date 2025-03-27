import { fetchCounterValue } from "./actions";
import CounterClient from "@/components/CounterClient";
export default async function Home() {
  const value = await fetchCounterValue();
  return (
    <main className="container py-12 space-y-12">
      <h1 className="font-bold text-center text-4xl">WeSpeak Challenge</h1>

      <CounterClient value={value}>
        <div className="relative h-10 w-12 flex items-center justify-center">
          <span className="text-2xl font-bold">{value}</span>
        </div>
      </CounterClient>
    </main>
  );
}
