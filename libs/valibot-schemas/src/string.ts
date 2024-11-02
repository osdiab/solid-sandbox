import * as v from "valibot";

export const requiredStringSchema = v.pipe(
	v.string(),
	v.minLength(1),
	v.brand("requiredString"),
);
export const integerStringSchema = v.pipe(
	requiredStringSchema,
	v.regex(/^\d+$/),
	v.brand("integerString"),
);
