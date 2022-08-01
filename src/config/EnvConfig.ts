import configJson from "./env.json";

interface EnvConfig {
  apiUrl: string;
  clientId: string;
  redirectUri: string;
  postLogoutRedirectUri: string;
  basename: string;
}

export const config = configJson as EnvConfig;
