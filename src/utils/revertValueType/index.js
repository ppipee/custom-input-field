export default function revertValueType(value, type) {
  switch (type) {
    case 'json':
    case 'array':
      return JSON.stringify(value)
    default:
      return String(value)
  }
}
