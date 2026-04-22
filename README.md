# bare-tpl

Simple template string based templating for Bare. Templates use JavaScript template literal syntax and are rendered by evaluating them with a given set of variables.

> [!CAUTION]
> Templates support arbitrary JavaScript execution and must only be rendered from trusted input.

```
npm i bare-tpl
```

## Usage

```js
const tpl = require('bare-tpl')

const result = tpl.render('Hello, ${name}!', { name: 'World' })

console.log(result) // 'Hello, World!'
```

## API

#### `const result = tpl.render(template, variables)`

Render a `template` string using the provided `variables`. The template uses JavaScript template literal syntax (`${...}`), with each key in `variables` available as a local variable within the template. Expressions are supported, so templates may contain arbitrary JavaScript within `${...}` delimiters.

`template` can be a string or any object with a `.toString()` method. `variables` must be an object whose keys become the variable names available in the template.

## License

Apache-2.0
