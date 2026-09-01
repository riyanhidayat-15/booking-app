export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const formater = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  });

  return formater.format(date);
};

export const formatCurrency = (amount: number) => {
  const formater = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 3,
  });

  return formater.format(amount);
};
