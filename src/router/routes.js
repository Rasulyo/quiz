
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'main', component: () => import('pages/Index.vue') },
      { path: 'enter', name: 'enter', component: () => import('pages/Enter.vue')},
      { path: 'stat', name: 'stat', component: () => import('pages/Stat.vue')}

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
