import { sync } from 'vuex-router-sync'

export default ({ app, router, store, Vue }) => {
  sync(store, router)
}
