// Compatibility wrapper for ESLint v9+ which expects a flat config file.
// This file re-exports the existing legacy .eslintrc.json so ESLint can load
// configuration when invoked as an ESM process.
module.exports = require("./.eslintrc.json");
