"use server";

import { eq } from "drizzle-orm";
import { counter } from "../db/schema";
import { db } from "../db";
import { revalidatePath } from "next/cache";

export async function fetchCounterValue(): Promise<number> {
  const result = await db.select().from(counter).where(eq(counter.id, 1));
  return result[0]?.value ?? 0;
}

export async function updateCounterValue(newValue: number): Promise<{ success: boolean; value: number }> {
  try {
    await db
      .insert(counter)
      .values({ id: 1, value: newValue })
      .onConflictDoUpdate({
        target: counter.id,
        set: { value: newValue },
      });

    revalidatePath("/");

    return { success: true, value: newValue };
  } catch (error) {
    console.error("Error updating counter:", error);

    const currentValue = await fetchCounterValue();
    return { success: false, value: currentValue };
  }
}
