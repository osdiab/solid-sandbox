import { runtimeEnvironment } from "@solid-sandbox/runtime-environment";
import {
	requiredStringSchema,
	integerStringSchema,
} from "@solid-sandbox/valibot-schemas/string";
import * as v from "valibot";

const dbCredentialsSchema = v.object({
	host: requiredStringSchema,
	user: requiredStringSchema,
	password: requiredStringSchema,
	database: requiredStringSchema,
	port: v.pipe(
		integerStringSchema,
		v.transform((stringValue) => Number(stringValue)),
	),
	ssl: v.boolean(),
});

export const dbCredentials = v.parse(dbCredentialsSchema, {
	host: process.env["POSTGRES_HOST"],
	user: process.env["POSTGRES_USER"],
	password: process.env["POSTGRES_PASSWORD"],
	database: process.env["POSTGRES_DB"],
	port: process.env["POSTGRES_PORT"],
	ssl: runtimeEnvironment !== "dev",
});
