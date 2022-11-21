import isObject from 'lodash/isObject'
import isEmpty from 'lodash/isEmpty'

export default function mapValueType(value, type) {
  switch (type) {
    case 'number':
      return Number(value)
    case 'boolean':
      return Boolean(value)
    case 'json':
    case 'array':
      try {
        let defaultValue = value

        if (isEmpty(value)) {
          if (type === 'json') {
            defaultValue = {}
          } else if (type === 'array') {
            defaultValue = []
          }
        }

        const dataObject = isObject(defaultValue)
          ? JSON.stringify(defaultValue)
          : defaultValue
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
