import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: '考研知识库',
  description: '数学 / 英语 / 政治 / 信号与系统',
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '数学', link: '/math/' },
      { text: '英语', link: '/english/' },
      { text: '政治', link: '/politics/' },
      { text: '信号与系统', link: '/signals/' }
    ],

    sidebar: {
      '/math/': [
        {
          text: '高等数学',
          collapsed: false,
          items: [
            { text: '极限与连续', link: '/math/calculus-limit' },
            { text: '微分学', link: '/math/calculus-derivative' },
            { text: '积分学', link: '/math/calculus-integral' }
          ]
        },
        {
          text: '线性代数',
          collapsed: false,
          items: [
            { text: '行列式', link: '/math/linear-determinant' },
            { text: '矩阵', link: '/math/linear-matrix' },
            { text: '特征值与特征向量', link: '/math/linear-eigen' }
          ]
        },
        {
          text: '概率统计',
          collapsed: false,
          items: [
            { text: '随机事件与概率', link: '/math/probability-basic' },
            { text: '随机变量及其分布', link: '/math/probability-distribution' }
          ]
        }
      ],
      '/english/': [
        {
          text: '词汇',
          items: [
            { text: '高频核心词', link: '/english/vocabulary-core' },
            { text: '词根词缀', link: '/english/vocabulary-affix' }
          ]
        },
        {
          text: '阅读',
          items: [
            { text: '长难句分析', link: '/english/reading-long-sentences' },
            { text: '题型技巧', link: '/english/reading-skills' }
          ]
        },
        {
          text: '写作',
          items: [
            { text: '万能句型', link: '/english/writing-templates' },
            { text: '图表作文', link: '/english/writing-graphs' }
          ]
        }
      ],
      '/politics/': [
        {
          text: '马克思主义基本原理',
          items: [
            { text: '哲学', link: '/politics/marx-philosophy' },
            { text: '政治经济学', link: '/politics/marx-economics' }
          ]
        },
        {
          text: '毛泽东思想和中国特色社会主义',
          items: [
            { text: '新民主主义革命', link: '/politics/mao-revolution' },
            { text: '社会主义建设', link: '/politics/mao-construction' }
          ]
        },
        {
          text: '时事政治',
          items: [
            { text: '2025 时政热点', link: '/politics/current-events' }
          ]
        }
      ],
      '/signals/': [
        {
          text: '信号与系统基础',
          items: [
            { text: '信号的分类与运算', link: '/signals/signal-basics' },
            { text: '系统的性质与分类', link: '/signals/system-properties' }
          ]
        },
        {
          text: '时域分析',
          items: [
            { text: '连续时间系统', link: '/signals/time-continuous' },
            { text: '离散时间系统', link: '/signals/time-discrete' },
            { text: '卷积', link: '/signals/convolution' }
          ]
        },
        {
          text: '频域分析',
          items: [
            { text: '傅里叶级数', link: '/signals/fourier-series' },
            { text: '傅里叶变换', link: '/signals/fourier-transform' },
            { text: '抽样定理', link: '/signals/sampling-theorem' }
          ]
        },
        {
          text: '复频域分析',
          items: [
            { text: '拉普拉斯变换', link: '/signals/laplace-transform' },
            { text: 'Z变换', link: '/signals/z-transform' }
          ]
        },
        {
          text: '系统函数与状态变量',
          items: [
            { text: '系统函数 H(s)', link: '/signals/system-function' },
            { text: '状态方程', link: '/signals/state-space' }
          ]
        }
      ]
    },

    socialLinks: [],
    outline: {
      label: '页面导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新'
    }
  },

  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  }
})
