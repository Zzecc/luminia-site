import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";

// Fonts (Clash Display / General Sans) are loaded via Fontshare's CSS API
// in Base.astro's <head> -- Fontshare isn't a Google Fonts provider, so
// they don't go through Astro's Fonts API here.
export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
		}),
	],
	devToolbar: { enabled: false },
});
