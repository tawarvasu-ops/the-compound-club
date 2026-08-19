import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EDEFE9",
        ink: "#1F2A24",
        pine: "#3D6B63",
        amber: "#D9A441",
        mist: "#8A9186",
        line: "#D3D8C9",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-newsreader)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
