import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./@core/**/pages/**/*.vue",
    "./@core/**/components/**/*.vue",
    "./@features/**/pages/**/*.vue",
    "./@features/**/components/**/*.vue",
  ],
};
