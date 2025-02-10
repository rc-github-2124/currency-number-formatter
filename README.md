# currency-number-formatter

A simple **JavaScript/Node.js** library to format large numbers into human-readable abbreviations (e.g., **1K, 1.5M, 2B**) with optional currency support.

## Installation

Install via **npm**:

```sh
npm install currency-number-formatter
```

Or via **yarn**:

```sh
yarn add currency-number-formatter
```

---

## Usage

### Import the Package

```js
const formatNumber = require("currency-number-formatter");
```

### Basic Usage

```js
console.log(formatNumber(500));        // "500"
console.log(formatNumber(1500));       // "1.5K"
console.log(formatNumber(2500000, 2)); // "2.50M"
console.log(formatNumber(1000000000)); // "1.0B"
```

### Using Currency Symbols

```js
console.log(formatNumber(1500, 1, "$"));    // "$1.5K"
console.log(formatNumber(2500000, 2, "₹")); // "₹2.50M"
console.log(formatNumber(750000000, 1, "€")); // "€750.0M"
```

---

## API Reference

### `formatNumber(number, decimals = 1, currency = "")`

Formats a number into a compact, human-readable string.

| Parameter  | Type   | Default | Description |
|------------|--------|---------|-------------|
| `number`   | `Number` | Required | The number to format |
| `decimals` | `Number` | `1` | Number of decimal places |
| `currency` | `String` | `""` (empty) | Optional currency symbol |

---

## License

This package is licensed under the **MIT License**.

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## Author

Developed by **Rohit Chavan**.

