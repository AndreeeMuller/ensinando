import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'vendas', component: () => import('pages/Vendas.vue') }
    ]
  },
  {
    path: '/admin/',
    component: () => import('layouts/Padrao.vue'),
    children: [
      { path: 'vendas', component: () => import('pages/Vendas.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
