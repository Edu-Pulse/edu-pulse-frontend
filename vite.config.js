import { defineConfig, loadEnv } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
	// eslint-disable-next-line no-undef
	const env = loadEnv(mode, process.cwd(), "");
	return {
		plugins: [react()],
		define: {
			"process.env": env,
		},
		resolve: {
			alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
		},
		server: {
			https: {
				key: "./ssl/localhost-key.pem",
				cert: "./ssl/localhost.pem",
			},
			host: true,
		},
		preview: {
			port: 5173,
		},
		presets: ["@babel/preset-env", "@babel/preset-react"],
	};
});
