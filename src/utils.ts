export const parseDate = (dateString: string): Date => {
  // 28/10/2018 == DD/MM/YYYY
  const date_split = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });
  return new Date(date_split[2], date_split[1] - 1, date_split[0]);
};
