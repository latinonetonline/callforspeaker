import configJson from "./env.json";

interface EnvConfig {
  apiUrl: string;
  clientId: string;
  redirectUri: string;
  postLogoutRedirectUri: string;
}

export const config = configJson as EnvConfig;
