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
      const dataObject = JSON.stringify({ data: value })

      return JSON.parse(dataObject).data
    case 'datetime':
      return new Date(value)
    default:
      return value
  }
}
