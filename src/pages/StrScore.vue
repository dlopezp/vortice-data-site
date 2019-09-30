<template>
  <q-page padding>
    <StrScoreTable :strScore="strScore" :title="guildName" />
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'
import StrScoreTable from '@/components/StrScoreTable'
// import columns from '@/domain/str-score-columns'

const { mapGetters } = createNamespacedHelpers(vorticeStore)
export default {
  name: 'STRScorePage',
  components: { StrScoreTable },
  computed: {
    ...mapGetters({
      guildId: getters.currentGuildId,
      guildName: getters.currentGuildName,
      strScore: getters.currentStrScore
    })
  }
}
</script>
