import { watch, ref } from 'vue'
import { isString } from '@/utils/is'
import { useAppStoreWithOut } from '@/store/modules/app'

const appStore = useAppStoreWithOut()
export const useTitle = (newTitle?: string) => {
  const title = ref(newTitle ? `${appStore.getTitle} - ${newTitle}` : appStore.getTitle)

  watch(
    title,
    (newVal, oldVal) => {
      if (isString(newVal) && newVal !== oldVal && document) {
        document.title = newVal
      }
    },
    { immediate: true }
  )

  return title
}
