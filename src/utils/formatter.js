export const formatCurrencyToRP = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

export const formatTime = (value) => {
  return new Intl.DateTimeFormat("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  }).format(value);
};
