import isEmpty from 'lodash/isEmpty'
import mapValueType from '../mapValueType'

export default function getDefaultValue(defaultValue, type) {
  if (!isEmpty(defaultValue)) {
    return mapValueType(defaultValue, type)
  }

  switch (type) {
    case 'json':
      return '{}'
    case 'array':
      return '[]'
    default:
      return ''
  }
}
