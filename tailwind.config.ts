import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./@core/**/pages/**/*.vue", "./@app/**/pages/**/*.vue"],
};
