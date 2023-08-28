import { createApp } from 'vue'

import { setupStore } from '@/store'

import { setupRouter } from '@/router'

import { setupElementPlus } from '@/plugins/element-plus'

import '@/style/index.scss'
import 'virtual:uno.css'

import App from './App.vue'

const bootstrap = async () => {
  const app = createApp(App)

  setupRouter(app)

  setupStore(app)

  setupElementPlus(app)

  app.mount('#app')
}

bootstrap()
