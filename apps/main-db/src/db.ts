import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { dbCredentials } from "./db-credentials";

export const db = drizzle(new pg.Client(dbCredentials));
