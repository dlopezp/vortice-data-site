import { name as auth } from '@/store/auth'
import { types as actions } from '@/store/auth/actions'

// leave the export, even if you don't use it
export default ({ app, store, router, Vue }) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.every(record => !record.meta.requiresAuth)) return next()

    store.dispatch(`${auth}/${actions.currentSession}`)
      .then(session => {
        if (session) return next()

        next({ path: '/' })
      })
      .catch(() => next({ path: '/' }))
  })
}
