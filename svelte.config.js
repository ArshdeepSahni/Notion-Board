// import adapter from "@sveltejs/adapter-netlify";
import staticAdapter from "@sveltejs/adapter-static";
import { config } from "dotenv";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
/** @type {import('@sveltejs/kit').Config} */
export default {
  plugins: [
    replace({
      __api: JSON.stringify({
        env: {
          isProd: true,
          ...config().parsed, // attached the .env config
        },
      }),
      delimiters: ["", ""],
    }),
    json(),
    // ...
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: staticAdapter(),
  },
};
