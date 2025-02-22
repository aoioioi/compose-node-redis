import express from "express";
import { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import compression from "compression";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import Redis from "ioredis";
import { db } from "./db";
import { bikesTable } from "./db/schema";

config();

const app = express();

const redis = new Redis({
  // Must specify redis on Docker Node Redis network
  host: "redis",
  port: Number(process.env.REDIS_PORT!),
});

redis.on("error", (error) => {
  console.log("Redis", error);
});

app.use(compression());
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({
  extended: false,
  limit: "10mb"
}));
app.use(express.json({
  limit: "10mb"
}));

app.get("/", async (req: Request, res: Response): Promise<any> => {
  const bikes = await db.select().from(bikesTable);

  if (bikes.length === 0) {
    return res.status(500).json({
      message: "Not found",
    });
  }

  console.log("🚲", bikes);

  const bike = bikes[0];
  const stringified = JSON.stringify(bikes[0]);
  redis.set(String(bike.id), stringified);

  res.status(200).json({
    message: "✨ OK",
  });
});

app.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const bike = await redis.get(id);

  res.status(200).json({
    data: bike ? JSON.parse(bike) : "Not found"
  });
});

app.use((error: Error, req: Request, res: Response, next: NextFunction): any => {
  console.log(error);

  return res.status(404).json({
    message: "Something went wrong"
  });
});

export default app;
