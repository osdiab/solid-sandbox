import { defineConfig } from "@pandacss/dev";
import { themeHTMLAttribute } from "./src/constants";

const buttonAccentBackgroundColorVariable = "--btn-accent-bg";
const buttonTextOnPageBackgroundVariable = "--btn-text-on-page";
const buttonTextOnAccentBackgroundVariable = "--btn-text-on-accent";

export default defineConfig({
	preflight: true, // Whether to use css reset

	include: ["./src/**/*.{js,jsx,ts,tsx}"],
	exclude: [],

	conditions: {
		extend: {
			light: `[${themeHTMLAttribute}="light"] &`,
			dark: `[${themeHTMLAttribute}="dark"] &`,
		},
	},

	theme: {
		extend: {
			semanticTokens: {
				colors: {
					text: {
						body: {
							value: {
								_light: "{colors.gray.900}",
								_dark: "{colors.gray.100}",
							},
						},
						brand: {
							value: {
								_light: "{colors.blue.500}",
								_dark: "{colors.blue.400}",
							},
						},
						onBrandBackground: {
							value: {
								_light: "{colors.white}",
								_dark: "{colors.gray.900}",
							},
						},
						danger: {
							value: {
								_light: "{colors.red.500}",
								_dark: "{colors.red.400}",
							},
						},
						onDangerBackground: {
							value: {
								_light: "white",
								_dark: "white",
							},
						},
					},
					background: {
						body: {
							value: {
								_light: "{colors.gray.50}",
								_dark: "{colors.gray.900}",
							},
						},
						brand: {
							value: {
								_light: "{colors.blue.500}",
								_dark: "{colors.blue.400}",
							},
						},
						danger: {
							value: {
								_light: "{colors.red.500}",
								_dark: "{colors.red.400}",
							},
						},
					},
				},
			},
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
								[buttonAccentBackgroundColorVariable]:
									"{colors.background.brand}",
								[buttonTextOnAccentBackgroundVariable]:
									"{colors.text.onBrandBackground}",
								[buttonTextOnPageBackgroundVariable]: "{colors.text.brand}",
							},
							secondary: {
								[buttonAccentBackgroundColorVariable]:
									"{colors.background.body}",
								[buttonTextOnPageBackgroundVariable]: "{colors.text.body}",
								[buttonTextOnAccentBackgroundVariable]: "white",
							},
							danger: {
								[buttonAccentBackgroundColorVariable]:
									"{colors.background.danger}",
								[buttonTextOnPageBackgroundVariable]: "{colors.text.danger}",
								[buttonTextOnAccentBackgroundVariable]:
									"{colors.text.onDangerBackground}",
							},
						},
						type: {
							filled: {
								background: `var(${buttonAccentBackgroundColorVariable})`,
								borderColor: `var(${buttonAccentBackgroundColorVariable})`,
								color: `var(${buttonTextOnAccentBackgroundVariable})`,
							},
							outline: {
								background: "transparent",
								borderColor: `var(${buttonTextOnPageBackgroundVariable})`,
								color: `var(${buttonTextOnPageBackgroundVariable})`,
							},
							text: {
								background: "transparent",
								borderColor: "transparent",
								color: `var(${buttonTextOnPageBackgroundVariable})`,
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
