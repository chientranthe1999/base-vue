import { defineStore } from 'pinia'
import { store } from '../index'
import { humpToUnderline, setCssVar } from '@/utils/common'
import { useCache } from '@/hooks/web/useCache'
import { ThemeTypes } from '@/types/theme'

const { wsCache } = useCache()

interface AppState {
  breadcrumb: boolean
  breadcrumbIcon: boolean
  collapse: boolean
  hamburger: boolean
  screenfull: boolean
  locale: boolean
  logo: boolean
  pageLoading: boolean
  title: string
  isDark: boolean
  mobile: boolean
  footer: boolean
  theme: ThemeTypes
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      mobile: false,
      title: import.meta.env.VITE_APP_TITLE,
      pageLoading: false,
      breadcrumb: false,
      breadcrumbIcon: true,
      collapse: false,
      hamburger: true,
      screenfull: true,
      locale: true,
      logo: true,
      footer: true,
      isDark: wsCache.get('isDark') || false,
      theme: wsCache.get('theme') || {
        elColorPrimary: '#009688',

        leftMenuBorderColor: 'inherit',

        leftMenuBgColor: '#001529',

        leftMenuBgLightColor: '#0f2438',

        leftMenuBgActiveColor: 'var(--el-color-primary)',

        leftMenuCollapseBgActiveColor: 'var(--el-color-primary)',

        leftMenuTextColor: '#bfcbd9',

        leftMenuTextActiveColor: '#fff',

        logoTitleTextColor: '#fff',

        logoBorderColor: 'inherit',

        topHeaderBgColor: '#fff',

        topHeaderTextColor: 'inherit',

        topHeaderHoverColor: '#f6f6f6',

        topToolBorderColor: '#eee'
      }
    }
  },
  getters: {
    getBreadcrumb(): boolean {
      return this.breadcrumb
    },

    getBreadcrumbIcon(): boolean {
      return this.breadcrumbIcon
    },

    getCollapse(): boolean {
      return this.collapse
    },

    getHamburger(): boolean {
      return this.hamburger
    },

    getScreenfull(): boolean {
      return this.screenfull
    },

    getLocale(): boolean {
      return this.locale
    },

    getLogo(): boolean {
      return this.logo
    },

    getPageLoading(): boolean {
      return this.pageLoading
    },

    getTitle(): string {
      return this.title
    },

    getIsDark(): boolean {
      return this.isDark
    },

    getMobile(): boolean {
      return this.mobile
    },

    getTheme(): ThemeTypes {
      return this.theme
    },

    getFooter(): boolean {
      return this.footer
    }
  },
  actions: {
    setBreadcrumb(breadcrumb: boolean) {
      this.breadcrumb = breadcrumb
    },
    setBreadcrumbIcon(breadcrumbIcon: boolean) {
      this.breadcrumbIcon = breadcrumbIcon
    },
    setCollapse(collapse: boolean) {
      this.collapse = collapse
    },

    setHamburger(hamburger: boolean) {
      this.hamburger = hamburger
    },

    setScreenfull(screenfull: boolean) {
      this.screenfull = screenfull
    },

    setLocale(locale: boolean) {
      this.locale = locale
    },

    setLogo(logo: boolean) {
      this.logo = logo
    },

    setPageLoading(pageLoading: boolean) {
      this.pageLoading = pageLoading
    },

    setTitle(title: string) {
      this.title = title
    },

    setIsDark(isDark: boolean) {
      this.isDark = isDark
      if (this.isDark) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }
      wsCache.set('isDark', this.isDark)
    },

    setMobile(mobile: boolean) {
      this.mobile = mobile
    },

    setTheme(theme: ThemeTypes) {
      this.theme = Object.assign(this.theme, theme)
      wsCache.set('theme', this.theme)
    },

    setCssVarTheme() {
      for (const key in this.theme) {
        setCssVar(`--${humpToUnderline(key)}`, this.theme[key])
      }
    },

    setFooter(footer: boolean) {
      this.footer = footer
    }
  }
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}
