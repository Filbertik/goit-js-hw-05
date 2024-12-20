function formatMessage(message, maxLength) {
  if (message.length > maxLength) {
    return message.slice(0, maxLength) + "...";
  } else {
    return message;
  }
}

// Виклик функції
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Hello, world!", 20));
console.log(formatMessage("This is a test message", 10));
console.log(formatMessage("Short text", 20));
