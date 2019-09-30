<template>
  <q-page padding>
    <StrScoreTable :strScore="strScore" title="Comunidad" />
  </q-page>
</template>

<style>
</style>

<script>
import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'
import StrScoreTable from '@/components/StrScoreTable'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'PageVorticeStrScore',
  components: { StrScoreTable },
  computed: {
    ...mapGetters({
      strScore: getters.communityStrScore
    })
  }
}
</script>
