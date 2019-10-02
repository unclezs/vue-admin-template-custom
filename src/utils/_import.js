export default function (component) {
  switch (component) {
    case 'Layout':
      return require("@/layout").default
    case 'Test':
      return require('@/views/table/index').default
    default:
      return require('@/views/' + component + '/index').default
  }
}
