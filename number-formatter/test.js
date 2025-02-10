const formatNumber = require("./index");

console.log(formatNumber(500));             // "500"
console.log(formatNumber(1500));            // "1.5K"
console.log(formatNumber(2500000, 2));      // "2.50M"
console.log(formatNumber(1000000000));      // "1.0B"

console.log(formatNumber(1500, 1, "$"));    // "$1.5K"
console.log(formatNumber(2500000, 2, "₹")); // "₹2.50M"
console.log(formatNumber(750000000, 1, "€")); // "€750.0M"
