<template>
    <q-collapsible class="platoon">
      <template slot="header">
        <q-item-side left>
          <q-icon :name="icon" />
        </q-item-side>
        <q-item-main :label="label" />
        <q-item-side right>
          <q-toggle label="Activo" v-model="active" @input="notify" />
        </q-item-side>
      </template>
      <div class="row">
        <div class="col-2" v-for="(unitKey, index) in platoon.units" :key="index">
          <PlatoonUnit :unitKey="unitKey" :availability="unitAvailability(unitKey)" />
        </div>
      </div>
    </q-collapsible>
</template>

<script>
import PlatoonUnit from '@/components/PlatoonUnit'

export default {
  name: 'Platoon',
  components: { PlatoonUnit },
  props: {
    platoon: Object,
    label: String,
    impossibleUnits: Object,
    hardUnits: Object,
    difficultUnits: Object
  },
  data () {
    return {
      active: true
    }
  },
  computed: {
    hasImpossibleUnits () {
      return this.platoon.units.find(unitKey => this.impossibleUnits[unitKey])
    },
    hasHardUnits () {
      return this.platoon.units.find(unitKey => this.hardUnits[unitKey])
    },
    hasDifficultUnits () {
      return this.platoon.units.find(unitKey => this.difficultUnits[unitKey])
    },
    icon () {
      if (this.hasImpossibleUnits) return 'cancel'
      if (this.hasHardUnits) return 'error'
      if (this.hasDifficultUnits) return 'warning'

      return 'check_circle_outline'
    }
  },
  watch: {
    platoon: function (oldVal, newVal) {
      this.active = true
    }
  },
  methods: {
    unitAvailability (unitKey) {
      if (this.impossibleUnits[unitKey]) return 'impossible'
      if (this.hardUnits[unitKey]) return 'hard'
      if (this.difficultUnits[unitKey]) return 'difficult'

      return ''
    },
    notify () {
      const event = this.active ? 'activate-platoon' : 'deactivate-platoon'
      this.$emit(event, this.label)
    }
  }
}
</script>

<style>

</style>
