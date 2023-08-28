import router from './router'
// import { useAppStoreWithOut } from '@/store/modules/app'
import { useTitle } from '@/hooks/web/useTitle'
import { useNProgress } from '@/hooks/web/useNProgress'

import { usePageLoading } from '@/hooks/web/useLoading'
// import { STORAGE_KEY } from '@/contants/common'

// const { wsCache } = useCache()

const { start, done } = useNProgress()

const { loadStart, loadDone } = usePageLoading()

// const whiteList = ['/login'] // allow not need auth

router.beforeEach(async (_, __, next) => {
  start()
  loadStart()

  next()
})

router.afterEach((to) => {
  useTitle(to?.meta?.title as string)
  done()
  loadDone()
})
