import isObject from 'lodash/isObject'
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
      try {
        const dataObject = isObject(value) ? JSON.stringify(value) : value
        const stringObject = isString(dataObject)
          ? JSON.parse(dataObject)
          : dataObject

        return stringObject
      } catch {
        return value
      }
    case 'datetime':
      return new Date(value)
    default:
      return value
  }
}
