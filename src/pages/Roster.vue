<template>
  <q-page padding>
    <RosterTable :roster="roster" :title="guildName" />

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
import csvDownloader from '@/utils/csv-downloader'
import columns from '@/domain/roster-columns'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'PageRoster',
  components: { RosterTable },
  computed: {
    ...mapGetters({
      guildId: getters.currentGuildId,
      guildName: getters.currentGuildName,
      roster: getters.currentRoster
    })
  },
  methods: {
    exportCsv () {
      csvDownloader(this.roster, columns, `Roster.${this.guildName}`)
    }
  }
}
</script>
