import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="container py-12 space-y-12">
      <h1 className="font-bold text-center text-4xl">WeSpeak Challenge</h1>
      <div className="flex items-center justify-center w-full">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    </main>
  );
}
