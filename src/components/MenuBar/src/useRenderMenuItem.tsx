import { ElSubMenu } from 'element-plus'
import type { RouteMeta } from 'vue-router'

export const useRenderMenuItem = () => {
  const renderMenuItems = (routers: AppRouteRecordRaw[], parentPath = '/') => {
    return routers.map((route) => {
      const meta = (route.meta ?? {}) as RouteMeta

      if (!meta.hidden) {
        return (
          <ElSubMenu>
            {{
              title: () => renderMenuTile(meta),
              default: () => renderMenuTitle(route.children!, fullPath)
            }}
          </ElSubMenu>
        )
      }
    })
  }

  return renderMenuItems
}
