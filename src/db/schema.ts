import { mysqlTable, int } from "drizzle-orm/mysql-core";

export const counter = mysqlTable("counter", {
  id: int("id").primaryKey(),
  value: int("value").default(0),
});
