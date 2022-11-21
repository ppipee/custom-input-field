import isObject from 'lodash/isObject'

export default function mapValueType(value, type) {
  switch (type) {
    case 'number':
      return Number(value)
    case 'boolean':
      return Boolean(value)
    case 'json':
    case 'array':
      const stringObject = isObject(value) ? JSON.stringify(value) : value

      return JSON.parse(stringObject)
    case 'datetime':
      return new Date(value)
    default:
      return value
  }
}
