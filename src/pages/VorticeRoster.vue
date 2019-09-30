<template>
  <q-page padding>
    <RosterTable :roster="roster" title="Comunidad" />

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

<style>
</style>

<script>
import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'
import RosterTable from '@/components/RosterTable'
import columns from '@/domain/roster-columns'
import csvDownloader from '@/utils/csv-downloader'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'PageVorticeRoster',
  components: { RosterTable },
  computed: {
    ...mapGetters({
      roster: getters.communityRoster
    })
  },
  methods: {
    exportCsv () {
      csvDownloader(this.roster, columns, 'Roster.Comunidad')
    }
  }
}
</script>
