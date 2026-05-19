import DefaultTheme from 'vitepress/theme'
import GraphView from './components/GraphView.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GraphView', GraphView)
  }
}
