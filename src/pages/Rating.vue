<template>
  <q-page padding>
    <RatingTable :rating="rating" :title="guildName" />

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
import RatingTable from '@/components/RatingTable'
import columns from '@/domain/rating-columns'
import csvDownloader from '@/utils/csv-downloader'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'PageRating',
  components: { RatingTable },
  computed: {
    ...mapGetters({
      guildId: getters.currentGuildId,
      guildName: getters.currentGuildName,
      rating: getters.currentRating
    })
  },
  methods: {
    exportCsv () {
      csvDownloader(this.rating, columns, `Clasificacion.${this.guildName}`)
    }
  }
}
</script>
