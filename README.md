# fints-lerna

[![npm](https://img.shields.io/npm/v/node-fints.svg)](https://www.npmjs.com/package/node-fints)

A client library for communicating with [FinTS servers](https://www.hbci-zka.de/).

Fork from npm [fints](https://github.com/Prior99/fints)

## Packages

This library is maintained in a [monorepo using lerna](https://lernajs.io/). These packages are included:

 * [fints](packages/fints) (Take a look for library usage instructions.)
 * [fints-cli](packages/fints-cli) (Take a look for CLI usage instructions.)

## Mentions

FinTS is a complex and old format and this library wouldn't have been possible without the great work of:

- [python-fints](https://github.com/raphaelm/python-fints) was used a reference implementation.
- [Open-Fin-TS-JS-Client](https://github.com/jschyma/open_fints_js_client) provides a demo server used for testing this library.
- [mt940-js](https://github.com/webschik/mt940-js) is used internally for parsing the [MT940](https://en.wikipedia.org/wiki/MT940) format.

## Resources

- [API Reference](https://prior99.gitlab.io/fints)
- [Official specification](https://www.hbci-zka.de/spec/3_0.htm)
- [Database of banks with their URLs](https://github.com/jhermsmeier/fints-institute-db)

## Contributing

Contributions in the form of well-documented issues or pull-requests are welcome.

## Contributors

 - Frederick Gnodtke
