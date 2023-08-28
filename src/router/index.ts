import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import Layout from '@/layouts/Layout.vue'
// import { useI18n } from '@/hooks/web/useI18n'

// const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/Auth/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      // title: t('router.login'),
      title: 'Login',
      noTagsView: true
    }
  },
  {
    path: '/test-layout',
    component: Layout,
    name: 'R',
    meta: {
      hidden: true,
      // title: t('router.login'),
      title: 'R',
      noTagsView: true
    },
    children: [
      {
        path: '',
        component: () => import('@/views/TestLayout.vue'),
        name: 'test',
        meta: {
          hidden: true,
          title: 'Login',
          noTagsView: true
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NotFound',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]

const createRouterF1 = () => {
  return createRouter({
    history: createWebHistory(),
    strict: true,
    routes: constantRouterMap as RouteRecordRaw[],
    scrollBehavior: () => ({ left: 0, top: 0 })
  })
}

let router = createRouterF1()

export const resetRouter = (): void => {
  router = createRouterF1()
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
