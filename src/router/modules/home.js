// publicRouter
export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home'),
        meta: {
            request: false,
            title: '首页'
        }
    },
]