import * as v from "valibot";

const runtimeEnvironmentSchema = v.picklist([
	"dev",
	"test",
	"preview",
	"staging",
	"production",
]);

export const runtimeEnvironment = v.parse(
	runtimeEnvironmentSchema,
	process.env["RUNTIME_ENVIRONMENT"],
);
