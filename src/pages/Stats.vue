<template>
  <q-page padding>
    <StatsTable :stats="stats" title="Comunidad" />

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
import StatsTable from '@/components/StatsTable'
import BaseStatsTable from '@/components/BaseStatsTable'
import columns from '@/domain/stats-columns'
import csvDownloader from '@/utils/csv-downloader'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'PageVorticeStatsBase',
  components: { StatsTable, BaseStatsTable },
  computed: {
    ...mapGetters({
      stats: getters.statsByChar
    })
  },
  methods: {
    exportCsv () {
      csvDownloader(this.stats, columns, 'Stats.Comunidad')
    }
  }
}
</script>
