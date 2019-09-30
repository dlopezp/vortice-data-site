<template>
  <div class="platoon-territory" :class="cssClass">
    <q-collapsible :label="name" :icon="icon">
      <q-list striped separator>
        <Platoon
          v-for="(platoonData, index) in data" :key="index"
          :impossibleUnits="impossibleUnits"
          :hardUnits="hardUnits"
          :difficultUnits="difficultUnits"
          :label="index"
          :platoon="platoonData"
          v-on:activate-platoon="onActivatePlatoon"
          v-on:deactivate-platoon="onDeactivatePlatoon"
          />
      </q-list>
    </q-collapsible>
  </div>
</template>

<script>
import PlatoonUnit from '@/components/PlatoonUnit'
import Platoon from '@/components/Platoon'

export default {
  name: 'PlatoonTerritory',
  props: {
    data: Object,
    name: String,
    impossibleUnits: Object,
    hardUnits: Object,
    difficultUnits: Object
  },
  components: { Platoon, PlatoonUnit },
  computed: {
    unitsKeys () {
      return [ ...this.data[1].units, ...this.data[2].units, ...this.data[3].units, ...this.data[4].units, ...this.data[5].units, ...this.data[6].units ]
    },
    hasImpossibleUnits () {
      return this.unitsKeys.find(unitKey => this.impossibleUnits[unitKey])
    },
    hasHardUnits () {
      return this.unitsKeys.find(unitKey => this.hardUnits[unitKey])
    },
    hasDifficultUnits () {
      return this.unitsKeys.find(unitKey => this.difficultUnits[unitKey])
    },
    icon () {
      if (this.hasImpossibleUnits) return 'cancel'
      if (this.hasHardUnits) return 'error'
      if (this.hasDifficultUnits) return 'warning'

      return 'check_circle_outline'
    },
    cssClass () {
      if (this.hasImpossibleUnits) return 'platoon-territory__impossible'
      if (this.hasHardUnits) return 'platoon-territory__hard'
      if (this.hasDifficultUnits) return 'platoon-territory__difficult'

      return 'check_circle_outline'
    }
  },
  methods: {
    unitAvailability (unitKey) {
      if (this.impossibleUnits[unitKey]) return 'impossible'
      if (this.hardUnits[unitKey]) return 'hard'
      if (this.difficultUnits[unitKey]) return 'difficult'

      return ''
    },
    platoonIcon (platoon) {
      return ''
    },
    onActivatePlatoon (platoonLabel) {
      this.$emit('activate-platoon', { territory: this.name, platoon: platoonLabel })
    },
    onDeactivatePlatoon (platoonLabel) {
      this.$emit('deactivate-platoon', { territory: this.name, platoon: platoonLabel })
    }
  }
}
</script>

<style lang="stylus">
  @import '~variables'

  // .platoon-territory__impossible
  //   background-color $red-6

  // .platoon-territory__hard
  //   background-color $red-4

  // .platoon-territory__difficult
  //   background-color $red-2
</style>
