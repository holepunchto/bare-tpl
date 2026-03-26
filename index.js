exports.render = function render(template, variables) {
  if (typeof template !== 'string') template = template.toString()

  const keys = Object.keys(variables)
  const values = Object.values(variables)

  return new Function(...keys, `return \`${template}\``)(...values)
}
