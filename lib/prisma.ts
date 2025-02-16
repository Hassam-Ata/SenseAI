import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const db = new PrismaClient().$extends(withAccelerate());

const globalForDb = global as unknown as { db: typeof db };

if (process.env.NODE_ENV !== "production") globalForDb.db = db;

export default db;
