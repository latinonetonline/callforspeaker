import { config } from "../../config/EnvConfig";


export const getUnavailableDates = async (): Promise<Date[]> => {
  return await fetch(config.apiUrl + "/api/v1/webinars-module/Proposals/dates")
  .then(data => data.json())
  .then(response => (response.result.dates as string[]).map(x => new Date(x)));
};
