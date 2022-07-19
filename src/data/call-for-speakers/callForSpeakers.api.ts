export const getUnavailableDates = async (): Promise<Date[]> => {
  return await fetch("https://api.latinonet.online/api/v1/callforspeakers-module/Proposals/dates")
  .then(data => data.json())
  .then(response => response.result as Date[]);
};
