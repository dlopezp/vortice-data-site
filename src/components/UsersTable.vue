<template>
  <div>
    <h4>Usuarios</h4>
    <q-table
      title="Users"
      :data="users"
      :columns="columns"
      :filter="filter"
      row-key="name"
      :pagination.sync="pagination">

      <template slot="top-left" slot-scope="props">
        <div>
          <q-search
            hide-underline
            color="secondary"
            v-model="filter"
            class="col-6"
          />
        </div>
      </template>

      <template slot="top-right" slot-scope="props">
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
        />
      </template>

      <q-td slot="body-cell-roles" slot-scope="props" :props="props">
        <q-chip small v-for="role in props.value" :key="role">{{ roleName(role) }}</q-chip>
      </q-td>
    </q-table>
  </div>
</template>

<script>
import columns from '@/domain/users-columns'
import { roles } from '@/services/auth'

import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'UsersTable',
  props: {
    users: Array
  },
  data: () => ({
    columns,
    pagination: {
      page: 1,
      rowsPerPage: 15
    },
    filter: ''
  }),
  computed: {
    ...mapGetters({
      guilds: getters.guilds
    })
  },
  methods: {
    roleName (role) {
      if (role === roles.ADMIN) return roles.ADMIN

      const guildId = role.substring(roles.OFFICIAL.length + 1)
      const guild = this.guilds[guildId]

      return guild && `Oficial ${guild.name}`
    }
  }
}
</script>
