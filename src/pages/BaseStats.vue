<template>
  <q-page padding>
    <!-- <StatsTable :stats="stats" title="Comunidad" /> -->
    <BaseStatsTable :stats="stats" title="Comunidad" />

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
import columns from '@/domain/stats-base-columns'
import csvDownloader from '@/utils/csv-downloader'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'PageVorticeStatsBase',
  components: { StatsTable, BaseStatsTable },
  computed: {
    ...mapGetters({
      statsBase: getters.statsBase,
      units: getters.units
    }),
    stats () {
      return Object.keys(this.statsBase)
        .map(
          unitKey => {
            return { id: unitKey, ...this.statsBase[unitKey], ...this.units[unitKey] }
          }
        )
    }
  },
  methods: {
    exportCsv () {
      csvDownloader(this.stats, columns, 'StatsBase.Comunidad')
    }
  }
}
</script>
