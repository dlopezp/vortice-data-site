<template>
  <q-page padding>
    <q-list highlight>
      <q-list-header>Gremios</q-list-header>
      <q-item v-for="guild in guilds" :key="guild.id">
        <q-item-side>
          <q-item-tile avatar>
            <GuildIcon :guild="guild" />
          </q-item-tile>
        </q-item-side>
        <q-item-main :label="guild.name" />
        <q-item-side right>
          <q-btn flat icon="delete" color="negative" @click="askForDelete(guild)" />
        </q-item-side>
      </q-item>
    </q-list>

    <NewGuildDialog />
  </q-page>
</template>

<script>
import GuildIcon from '@/components/GuildIcon'
import NewGuildDialog from '@/components/NewGuildDialog'

import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'
import { types as actions } from '@/store/vortice/actions'

const { mapGetters, mapActions } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'Guilds',
  components: { GuildIcon, NewGuildDialog },
  computed: {
    ...mapGetters({
      guilds: getters.guilds
    })
  },
  methods: {
    ...mapActions({
      deleteGuild: actions.deleteGuild
    }),
    async askForDelete (guild) {
      try {
        await this.$q.dialog({
          title: 'Borrar gremio',
          message: `Está seguro de borrar el gremio ${guild.name}`,
          ok: 'Borrar',
          cancel: 'Cancelar'
        })
        this.deleteGuild({ guildId: guild.id })
      } catch (error) {}
    }
  }
}
</script>

<style>

</style>
