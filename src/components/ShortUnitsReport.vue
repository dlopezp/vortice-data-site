<template>
  <div>
    <div v-for="(unitKey, index) in units" :key="index">
      <strong>{{ unitName(unitKey) }}: </strong>
      <span v-for="(owner, index) in owners(unitKey)" :key="index">{{ playerName(owner, guildId) }} </span>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'ShortUnitsReport',
  props: {
    units: Array,
    guildUnits: Object
  },
  computed: {
    ...mapGetters({
      guildId: getters.currentGuildId,
      playerName: getters.playerName,
      unitName: getters.unitName
    })
  },
  methods: {
    owners (unitKey) {
      return this.guildUnits[unitKey].total
    }
  }
}
</script>

<style>

</style>
