export const checkPayment = (paymentFrom, paymentTo) => {
  if ((paymentFrom === 0) & (paymentTo === 0)) {
    return "не указана";
  }
  if (paymentFrom === 0) {
    return `до ${paymentTo}`;
  }
  if (paymentTo === 0) {
    return `от ${paymentFrom}`;
  }
};
