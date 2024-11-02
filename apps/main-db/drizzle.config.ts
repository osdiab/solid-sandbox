import { defineConfig } from "drizzle-kit";
import { dbCredentials } from "./src/db-credentials";

export default defineConfig({
	out: "./gen/drizzle",
	schema: "./src/schema.ts",
	dialect: "postgresql",
	dbCredentials,
});
