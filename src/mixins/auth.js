import { createNamespacedHelpers } from 'vuex'
import { name as auth } from '@/store/auth'
import { types as actions } from '@/store/auth/actions'

const { mapActions } = createNamespacedHelpers(auth)

export default {
  methods: {
    ...mapActions({
      currentSession: actions.currentSession
    })
  },
  mounted () {
    this.currentSession()
  }
}
