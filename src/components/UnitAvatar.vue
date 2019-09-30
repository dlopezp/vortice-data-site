<template>
  <img v-if="unit" :src="unitImageUrl" :alt="unit.name">
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'UnitAvatar',
  props: {
    unitId: String
  },
  computed: {
    ...mapGetters({
      unitById: getters.unit
    }),
    unit () {
      return this.unitById(this.unitId)
    },
    unitImageUrl () {
      if (!this.unit) {
        console.log(this.unitId)
        return ''
      }
      return `//swgoh.gg/static/img/assets/${this.unit.image}.png`
    }
  }
}
</script>

<style scoped lang="stylus">
  img
    border-radius 100%
    max-width 40px
    vertical-align middle
</style>
