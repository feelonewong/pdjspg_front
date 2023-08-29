/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
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
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: '调研结果' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          name: 'Menu1-1',
          meta: { title: '整体结果' }
        },
        {
          path: 'menu1-2',
          component: () => import('@/views/nested/menu1/menu1-1'),
          name: 'Menu1-2',
          meta: { title: '学前教育' }
        },
        {
          path: 'menu1-3',
          component: () => import('@/views/nested/menu1/menu1-1'),
          name: 'Menu1-3',
          meta: { title: '义务教育' }
        },
        {
          path: 'menu1-4',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: 'Menu1-4',
          meta: { title: '高中含职校' }
        },
        {
          path: 'menu1-5',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: 'Menu1-5',
          meta: { title: '结果比较' }
        },
        {
          path: 'menu1-6',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: 'Menu1-6',
          meta: { title: '人口学信息' }
        }
      ]
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '结论与建议' }
    }
  ]
}

export default nestedRouter
