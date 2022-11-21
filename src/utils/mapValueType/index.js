export default function mapValueType(value, type) {
  switch (type) {
    case 'number':
      return Number(value)
    case 'boolean':
      return Boolean(value)
    case 'json':
    case 'array':
      return JSON.parse(JSON.stringify(value))
    case 'datetime':
      return new Date(value)
    default:
      return value
  }
}
