<template>
  <q-page padding>
    <GearTable :gear="gear" :title="guildName" />

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
import GearTable from '@/components/GearTable'
import columns from '@/domain/gear-columns'
import csvDownloader from '@/utils/csv-downloader'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'PageGear',
  components: { GearTable },
  computed: {
    ...mapGetters({
      guildId: getters.currentGuildId,
      guildName: getters.currentGuildName,
      gear: getters.currentGear
    })
  },
  methods: {
    exportCsv () {
      csvDownloader(this.gear, columns, `Gear.${this.guildName}`)
    }
  }
}
</script>
