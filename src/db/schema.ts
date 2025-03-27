import { integer, pgTable, serial } from 'drizzle-orm/pg-core';

export const counter = pgTable("counter", {
  id: serial("id").primaryKey(),
  value: integer("value").default(0),
});

export type InsertCounter = typeof counter.$inferInsert;
