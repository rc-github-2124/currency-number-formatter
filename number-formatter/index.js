function formatNumber(num, decimals = 1, currency = "") {
    if (num < 1000) return currency ? `${currency}${num.toFixed(decimals)}` : num.toString();
    
    const units = ["K", "M", "B", "T"];
    let unitIndex = -1;
    
    while (num >= 1000 && unitIndex < units.length - 1) {
        num /= 1000;
        unitIndex++;
    }

    const formattedNumber = `${num.toFixed(decimals)}${units[unitIndex]}`;
    return currency ? `${currency}${formattedNumber}` : formattedNumber;
}

// Export function for external usage
module.exports = formatNumber;
