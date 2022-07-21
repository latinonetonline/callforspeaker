import configJson from "./env.json";

interface EnvConfig {
  apiUrl: string;
}

export const config = configJson as EnvConfig;
