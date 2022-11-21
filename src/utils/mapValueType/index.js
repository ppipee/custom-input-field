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
      console.log('🔥 ~ value', value)
      try {
        const dataObject = isObject(value) ? JSON.stringify(value) : value
        console.log('🔥 ~ dataObject', dataObject)
        const stringObject = isString(dataObject)
          ? JSON.parse(dataObject)
          : dataObject
        console.log('🔥 ~ stringObject', stringObject)

        return stringObject
      } catch {
        console.log('🔥 ~ catch')
        return value
      }
    case 'datetime':
      return new Date(value)
    default:
      return value
  }
}
