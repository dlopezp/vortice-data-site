<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import AuthMixin from '@/mixins/auth'

import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as actions } from '@/store/vortice/actions'

const { mapActions } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'App',
  mixins: [ AuthMixin ],
  methods: {
    ...mapActions({
      fetchData: actions.fetchData
    })
  },
  mounted () {
    this.fetchData()
  }
}
</script>
