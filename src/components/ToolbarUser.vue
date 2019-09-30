<template>
  <q-btn-dropdown v-if="user" flat icon="person" :label="username">

    <q-list link>
      <div v-if="isAdmin">
        <q-list-header>Admin</q-list-header>
        <q-item to="/users">
          <q-item-main label="Usuarios" />
        </q-item>
        <q-item to="/metas">
          <q-item-main label="Metas" />
        </q-item>
        <q-item to="/guilds">
          <q-item-main label="Gremios" />
        </q-item>
        <!--
        <q-item to="/str-proven-squads">
          <q-item-main label="Capturas STR" />
        </q-item>
        -->
        <q-item to="/units-stats">
          <q-item-main label="Estadísticas de Unidades" />
        </q-item>
        <q-item to="/users-stats">
          <q-item-main label="Estadísticas de Jugadores" />
        </q-item>
      </div>

      <q-item-separator />
      <q-item @click.native="logout">
        <q-item-main>
          <q-item-tile label>Logout</q-item-tile>
        </q-item-main>
      </q-item>
    </q-list>
  </q-btn-dropdown>
  <q-btn v-else  flat round dense icon="person" to="/sign-in" />
</template>

<script>
import { roles } from '@/services/auth'
import { createNamespacedHelpers } from 'vuex'
import { name as auth } from '@/store/auth'
import { types as getters } from '@/store/auth/getters'
import { types as actions } from '@/store/auth/actions'

const { mapGetters, mapActions } = createNamespacedHelpers(auth)

export default {
  name: 'ToolbarUser',
  computed: {
    ...mapGetters({
      user: getters.currentUser,
      username: getters.username,
      roles: getters.roles
    }),
    isAdmin () {
      return this.roles.some(role => role === roles.ADMIN)
    }
  },
  methods: {
    ...mapActions({
      logoutAction: actions.logout
    }),
    logout () {
      this.logoutAction()
        .then(
          () => this.$router.replace('/')
        )
    }
  }
}
</script>
