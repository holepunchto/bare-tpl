const test = require('brittle')
const { render } = require('.')

test('basic', (t) => {
  t.is(render('${hello} world!', { hello: 'Howdy' }), 'Howdy world!')
})

test('code execution', (t) => {
  t.is(render("${hello + ' world!'}", { hello: 'Howdy' }), 'Howdy world!')
})
