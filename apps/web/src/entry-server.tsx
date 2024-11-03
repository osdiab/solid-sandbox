// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";
import { css } from "~gen/pandacss/css";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
					{assets}
				</head>
				<body
					class={css({
						backgroundColor: "background.body",
						color: "text.body",
					})}
				>
					<script
						type="text/javascript"
						innerHTML={`(function() {
	var colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
	var setTheme = function(dark) {
		document.body.setAttribute('data-theme', dark ? 'dark' : 'light');
	};

	setTheme(colorScheme.matches);

	if (colorScheme.addEventListener) {
		colorScheme.addEventListener('change', function(e) {
			setTheme(e.matches);
		});
	} else {
		colorScheme.addListener(function(e) {
			setTheme(e.matches);
		});
	}
})();`}
					/>
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
