import { db } from "..";
import { bikesTable } from "../schema";
import { seedData } from "../data";

// Run npx drizzle-kit push first
export async function seed() {
  await db.insert(bikesTable).values(seedData);
  console.log("New bikes created!");

  const bikes = await db.select().from(bikesTable);
  console.log("Getting all bikes from the database:", bikes);
}

seed();