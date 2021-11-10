import accounting from "accounting";

export const formatMoney = (value: number | string): string => {
  return accounting.formatMoney(value, "$", 0);
};
