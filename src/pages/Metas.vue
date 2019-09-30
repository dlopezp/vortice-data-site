<template>
  <q-page padding>

    <h4>Metas</h4>

    <q-option-group
      color="primary"
      type="toggle"
      :value="model"
      @change="onOptionGroupChange"
      :options="options"
    />

  </q-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'
import { types as actions } from '@/store/vortice/actions'

const { mapGetters, mapActions } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'MetasPage',
  computed: {
    ...mapGetters({
      metas: getters.metas,
      units: getters.units
    }),
    options () {
      const options = Object.keys(this.units)
        .map(key => this.units[key])
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(unit => ({ value: unit.id, label: unit.name }))

      return options
    },
    model () {
      return Object.keys(this.metas)
    }
  },
  methods: {
    ...mapActions({
      removeMeta: actions.removeMeta,
      setMetas: actions.setMetas
    }),
    onOptionGroupChange (model) {
      const metas = model
        .reduce(
          (carry, unitId) => {
            return {
              ...carry,
              [unitId]: true
            }
          },
          {}
        )
      this.setMetas({ metas })
    }
  }
}
</script>
