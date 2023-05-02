const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/movies', component: Movies},
        // Catch all paths that differ from the above
        {path: '/404', component: NotFound},
        // will match everything and put it under `$route.params.pathMatch`
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ]
});