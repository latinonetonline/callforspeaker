import { config } from "../../config/EnvConfig";
import { proposalsApi } from "../../services/apiClient";


export const getUnavailableDates = async (): Promise<Date[]> => {
  return await proposalsApi.getDates()
  .then(response => (response.data.result!.dates!).map(x => new Date(x)));
};
