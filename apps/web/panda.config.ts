import { defineConfig } from "@pandacss/dev";

const buttonAccentColorVariable = "--accent-color";
const buttonTextOnAccentBackgroundColorVariable = "--text-on-accent-bg-color";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			recipes: {
				button: {
					base: {
						borderRadius: "sm",
						paddingX: "2",
						paddingY: "1",
						border: "1px solid",
						cursor: "pointer",
					},
					variants: {
						role: {
							primary: {
								[buttonAccentColorVariable]: "token(colors.blue.500)",
								[buttonTextOnAccentBackgroundColorVariable]: "white",
							},
							secondary: {
								[buttonAccentColorVariable]: "token(colors.gray.500)",
								[buttonTextOnAccentBackgroundColorVariable]: "white",
							},
							danger: {
								[buttonAccentColorVariable]: "token(colors.red.500)",
								[buttonTextOnAccentBackgroundColorVariable]: "white",
							},
						},
						type: {
							filled: {
								background: `var(${buttonAccentColorVariable})`,
								borderColor: `var(${buttonAccentColorVariable})`,
								color: `var(${buttonTextOnAccentBackgroundColorVariable})`,
							},
							outline: {
								background: "transparent",
								borderColor: `var(${buttonAccentColorVariable})`,
								color: `var(${buttonAccentColorVariable})`,
							},
							text: {
								background: "transparent",
								borderColor: "transparent",
								color: `var(${buttonAccentColorVariable})`,
							},
						},
					},
					defaultVariants: {
						role: "primary",
						type: "filled",
					},
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "gen/pandacss",
});
