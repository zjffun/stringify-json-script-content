[![jsdelivr][jsdelivr-badge]][jsdelivr-link]
[![npm version][fury-badge]][fury-link]
[![test CI][test-badge]][test-link]
[![codecov][codecov-badge]][codecov-link]

# stringify-json-script-content

Stringify object to json that can use in script tags.

## Installation

npm

```sh
npm install stringify-json-script-content
```

## Usage

```js
import fs from "node:fs";
import stringifyJsonScriptContent from "stringify-json-script-content";

const jsonScriptContent = stringifyJsonScriptContent({
  hello: "world<script>!</script>",
});

const html = `
<!DOCTYPE html>
<script id="json-data" type="application/json">
  ${jsonScriptContent}
</script>
<script>
  console.log(JSON.parse(document.getElementById("json-data").textContent));
</script>
`;

fs.writeFileSync("test.html", html);
```

## API

### `stringifyJsonScriptContent(value, replacer, space)` (default export)

The parameters of `stringifyJsonScriptContent()` is same as [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and it returns like [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and can use in script tags.

### `encodeJsonScriptContent(jsonString)`

The `encodeJsonScriptContent()` encode chars that shouldn't use in script tags.

#### Example

```js
import { encodeJsonScriptContent } from "stringify-json-script-content";

const jsonString = JSON.stringify({ hello: "world<script>!</script>" });
const encodeJsonString = encodeJsonScriptContent(jsonString);

console.log(encodeJsonString);
```

## Release Notes

### [TODO]

### [Unreleased]

### v0.0.1

- Added features stringify object to json that can use in script tags.

<!-- Definitions -->

[fury-link]: https://badge.fury.io/js/stringify-json-script-content
[fury-badge]: https://badge.fury.io/js/stringify-json-script-content.svg
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/stringify-json-script-content
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/stringify-json-script-content/badge
[test-badge]: https://github.com/zjffun/stringify-json-script-content/workflows/test%20CI/badge.svg
[test-link]: https://github.com/zjffun/stringify-json-script-content/actions
[codecov-badge]: https://codecov.io/gh/zjffun/stringify-json-script-content/branch/main/graph/badge.svg
[codecov-link]: https://codecov.io/gh/zjffun/stringify-json-script-content
