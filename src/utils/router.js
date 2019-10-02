import _import from "@/utils/_import"
export default function (routers) {
  return filterAsyncRouter(routers)
}
//将后台返回的json权限数据格式化（递归遍历子节点）
export const filterAsyncRouter = (asyncRouterMap) => { //遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      route.component = _import(route.component)
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}
