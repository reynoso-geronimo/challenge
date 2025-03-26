"use server";

import { eq } from "drizzle-orm";
import { counter } from "../db/schema";
import { db } from "../db";

export async function fetchCounterValue(): Promise<number> {
  const result = await db.select().from(counter).where(eq(counter.id, 1));
  return result[0]?.value ?? 0;
}

export async function updateCounterValue(newValue: number): Promise<void> {
  await db
    .insert(counter)
    .values({ id: 1, value: newValue })
    .onDuplicateKeyUpdate({ set: { value: newValue } });
}
