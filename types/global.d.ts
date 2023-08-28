declare global {
  declare type LocaleType = 'vi' | 'en'

  declare type Nullable<T> = T | null

  declare type AxiosHeaders =
    | 'application/json'
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'

  declare type AxiosMethod = 'get' | 'post' | 'delete' | 'put'

  declare type AxiosResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

  declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

  declare interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    name?: string
    meta?: RouteMeta
    component?: Component | string
    children?: AppRouteRecordRaw[]
    props?: Recordable
    fullPath?: string
  }

  declare interface AppCustomRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    name: string
    meta: RouteMeta
    component: string
    path: string
    redirect: string
    children?: AppCustomRouteRecordRaw[]
  }
}
export {}
