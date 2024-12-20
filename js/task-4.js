function getShippingCost(country) {
  let priceShipping;
  switch (country) {
    case "China":
      priceShipping = 100;
      break;
    case "Chile":
      priceShipping = 250;
      break;
    case "Australia":
      priceShipping = 170;
      break;
    case "Jamaica":
      priceShipping = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
  return `Shipping to ${country} will cost ${priceShipping} credits`;
}

// Виклик функції
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
