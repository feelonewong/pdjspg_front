/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '',
  name: 'Nested',
  meta: {
    title: '区级报告',
    icon: 'nested'
  },
  children: [
    {
      path: 'base',
      name: 'base',
      component: () => import('@/views/nested/base'),
      meta: { title: '基本情况' }
    },
    {
      path: 'overall-result',
      name: 'overallResult',
      meta: { title: '调研结果' },
      component: () => import('@/views/nested/overall-result/index.vue'),
      children: [
        {
          path: 'result',
          component: () => import('@/views/nested/overall-result/result.vue'),
          name: 'result',
          meta: { title: '整体结果' }
        },
        {
          path: 'pre-edu',
          component: () => import('@/views/nested/overall-result/preEdu.vue'),
          name: 'preEdu',
          meta: { title: '学前教育' }
        },
        {
          path: 'comp-edu',
          component: () => import('@/views/nested/overall-result/comprehensiveEdu.vue'),
          name: 'comprehensiveEdu',
          meta: { title: '义务教育' }
        },
        {
          path: 'high-edu',
          component: () => import('@/views/nested/overall-result/highEdu.vue'),
          name: 'highEdu',
          meta: { title: '高中含职校' }
        },
        {
          path: 'result-compare',
          component: () => import('@/views/nested/overall-result/resultCompare.vue'),
          name: 'resultCompare',
          meta: { title: '结果比较' }
        },
        {
          path: 'demographic-info',
          component: () => import('@/views/nested/overall-result/demographicInfo.vue'),
          name: 'demographicInfo',
          meta: { title: '人口学信息' }
        }
      ]
    },
    {
      path: 'advice',
      name: 'advice',
      component: () => import('@/views/nested/advice.vue'),
      meta: { title: '结论与建议' }
    }
  ]
}

export default nestedRouter
