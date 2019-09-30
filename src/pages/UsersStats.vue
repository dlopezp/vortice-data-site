<template>
  <q-page padding>
    <PlayerStatsTable :stats="stats" title="Comunidad" />

    <q-btn
      round
      color="primary"
      @click="exportCsv"
      icon="cloud_download"
      class="fixed"
      style="right: 18px; bottom: 18px"
    />
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'
import PlayerStatsTable from '@/components/PlayerStatsTable'
import columns from '@/domain/player-stats-columns'
import csvDownloader from '@/utils/csv-downloader'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'PageVorticeUserStats',
  components: { PlayerStatsTable },
  computed: {
    ...mapGetters({
      stats: getters.playerStats
    })
  },
  methods: {
    exportCsv () {
      csvDownloader(this.stats, columns, 'StatsPlayer.Comunidad')
    }
  }
}
</script>
