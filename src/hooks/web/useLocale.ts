import { i18n } from '@/plugins/vue-i18n'
import { useLocaleStoreWithOut } from '@/store/modules/locale'
import { setHtmlPageLang } from '@/utils/common'

const setI18nLanguage = (locale: LocaleType) => {
  const localeStore = useLocaleStoreWithOut()

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    ;(i18n.global.locale as any).value = locale
  }

  localeStore.setCurrentLocale({
    lang: locale
  })

  setHtmlPageLang(locale)
}

export const useLocale = () => {
  const changeLocale = async (locale: LocaleType) => {
    const globalI18n = i18n.global

    const langModule = await import(`../../locales/${locale}.ts`)

    globalI18n.setLocaleMessage(locale, langModule.default)

    setI18nLanguage(locale)
  }

  return {
    changeLocale
  }
}