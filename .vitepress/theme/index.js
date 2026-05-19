import DefaultTheme from 'vitepress/theme'
import GraphView from './components/GraphView.vue'
import GraphView3D from './components/GraphView3D.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GraphView', GraphView)
    app.component('GraphView3D', GraphView3D)
  }
}
