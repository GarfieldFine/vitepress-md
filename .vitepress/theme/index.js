// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style/index.css'
import { inBrowser } from 'vitepress'
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样
import backtotop from './components/backtotop.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-footer-before': () => h(backtotop) // 在文档页底部插入返回顶部按钮
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    if (inBrowser) {
      NProgress.configure({ showSpinner: false })

      router.onBeforeRouteChange = () => {
        NProgress.start()
      }

      router.onAfterRouteChanged = () => {
        NProgress.done()
      }
    }
  }
}
