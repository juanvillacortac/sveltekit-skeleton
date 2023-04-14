import { defineConfig, transform } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [formsPlugin, transform("daisyui")],
});
