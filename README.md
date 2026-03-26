# bare-tpl

Simple template string based templating for Bare.

> [!CAUTION]
> Templates support arbitrary JavaScript execution and must only be rendered from trusted input.

```
npm i bare-tpl
```

## Usage

```js
const tpl = require('bare-tpl')

tpl.render('${hello} world!', { hello: 'Howdy' })
// Howdy world!
```

## License

Apache-2.0
