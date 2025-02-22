import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const bikesTable = sqliteTable("bikes_table", {
  id: int().primaryKey({ autoIncrement: true }),
  brand: text().notNull(),
  name: text().notNull(),
  max_clearance: int().notNull(),
  year: int().notNull(),
});
