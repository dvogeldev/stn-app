// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // ... (existing config)
  plugins: [
    require("@tailwindcss/typography"), // Add this line
  ],
};
export default config;