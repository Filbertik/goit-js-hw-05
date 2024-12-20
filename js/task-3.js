function checkForSpam(message) {
  const makeLowerMessage = message.toLowerCase();
  if (makeLowerMessage.includes("spam") || makeLowerMessage.includes("sale")) {
    return true;
  }
  return false;
}

// Виклик функції
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
