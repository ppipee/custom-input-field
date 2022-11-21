import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import isEmpty from 'lodash/isEmpty'

export default function mapValueType(value, type) {
  if (isEmpty(value)) {
    return value
  }

  switch (type) {
    case 'number':
      return Number(value)
    case 'boolean':
      return Boolean(value)
    case 'json':
    case 'array':
      const dataObject = isObject(value)
        ? JSON.stringify({ data: value })
        : value.replace(`'`, `"`)
      const stringObject = isString(dataObject)
        ? JSON.parse(dataObject)
        : dataObject

      return stringObject
    case 'datetime':
      return new Date(value)
    default:
      return value
  }
}
