<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Comunidad Vórtice
          <div slot="subtitle">Reporte de gremios</div>
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          @click="refresh"
          aria-label="Refresh"
        >
          <q-icon name="refresh" />
        </q-btn>

        <ToolbarUser />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list highlight separator>
          <q-collapsible :label="guild.name" v-for="guild in guildsInOrder" :key="guild.id">
            <q-item :to="`/guild/${guild.id}/gear`">
              <q-item-main label="Gear" />
            </q-item>
            <q-item :to="`/guild/${guild.id}/roster`">
              <q-item-main label="Roster" />
            </q-item>
            <q-item :to="`/guild/${guild.id}/rating`">
              <q-item-main label="Puntuación Roster" />
            </q-item>
            <!--
            <q-item :to="`/guild/${guild.id}/str-score`">
              <q-item-main label="Puntuación STR" />
            </q-item>
            -->
            <q-item :to="`/guild/${guild.id}/units`">
              <q-item-main label="Buscar unidades" />
            </q-item>
            <q-item :to="`/guild/${guild.id}/platoons`">
              <q-item-main label="Pelotones" />
            </q-item>
            <q-item-separator />
          </q-collapsible>

        <q-collapsible label="Comunidad">
          <q-item to="/vortice/gear">
            <q-item-main label="Gear" />
          </q-item>
          <q-item to="/vortice/roster">
            <q-item-main label="Roster" />
          </q-item>
          <q-item to="/vortice/rating">
            <q-item-main label="Puntuación Roster" />
          </q-item>
          <!--
          <q-item to="/vortice/str-score">
            <q-item-main label="Puntuación STR" />
          </q-item>
          -->
          <q-item-separator />
        </q-collapsible>

        <q-item to="/stats">
          <q-item-main label="Stats Base" />
        </q-item>

        <q-item to="/platoons">
          <q-item-main label="PJ/Naves raros" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ToolbarUser from '@/components/ToolbarUser'
import { openURL } from 'quasar'

import { createNamespacedHelpers } from 'vuex'
import { name as vortice } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'

const { mapGetters } = createNamespacedHelpers(vortice)

export default {
  name: 'MyLayout',
  components: { ToolbarUser },
  data () {
    return {
      leftDrawerOpen: true
    }
  },
  computed: {
    ...mapGetters({
      guilds: getters.guilds
    }),
    guildsInOrder () {
      if (!Object.keys(this.guilds)) return []

      return Object.values(this.guilds).sort((guildA, guildB) => guildB.gp - guildA.gp)
    }
  },
  methods: {
    openURL,
    refresh () {
      window.location.reload(true)
    }
  }
}
</script>
