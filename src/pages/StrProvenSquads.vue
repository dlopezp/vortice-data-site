<template>
  <q-page padding>
    <h4>Capturas Fases STR</h4>
    <div v-for="member in strSquads" :key="member.id" class="row">
      <div class="col-4">
        {{ member.name }}
      </div>
      <div class="col-2">
        <q-toggle
          :value="member.squads"
          val="f1"
          label="F1"
          @input="onInput($event, member)" />
      </div>
      <div class="col-2">
        <q-toggle
          :value="member.squads"
          val="f3"
          label="F3"
          @input="onInput($event, member)" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'
import { types as actions } from '@/store/vortice/actions'

const { mapGetters, mapActions } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'PageStrProvenSquads',
  computed: {
    ...mapGetters({
      squads: getters.strProvenSquads,
      players: getters.players
    }),
    strSquads () {
      const flatPlayers = Object.keys(this.players)
        .reduce(
          (carry, guildId) => {
            const players = this.players[guildId]
            return {
              ...carry,
              ...players
            }
          },
          {}
        )

      return Object.keys(flatPlayers)
        .map(playerId => flatPlayers[playerId])
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(
          player => {
            const playerProvenSquads = this.squads[player.id] || { f1: false, f3: false }
            return {
              id: player.id,
              name: player.name,
              squads: Object.keys(playerProvenSquads).filter(phase => playerProvenSquads[phase])
            }
          }
        )
    }
  },
  methods: {
    ...mapActions({
      setStrProvenSquads: actions.setStrProvenSquads
    }),
    onInput (newVal, { id }) {
      const strProvenSquads = {
        ...this.squads,
        [id]: {
          f1: newVal.indexOf('f1') !== -1,
          f3: newVal.indexOf('f3') !== -1
        }
      }
      this.setStrProvenSquads({ strProvenSquads })
    }
  }
}
</script>
