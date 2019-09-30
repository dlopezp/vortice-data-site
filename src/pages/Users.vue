<template>
  <q-page padding>
    <UsersTable :users="Object.values(users)" title="Usuarios" />

    <NewUserDialog />
  </q-page>
</template>

<script>
import UsersTable from '@/components/UsersTable'
import NewUserDialog from '@/components/NewUserDialog'

import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'UsersPage',
  components: { UsersTable, NewUserDialog },
  computed: {
    ...mapGetters({
      users: getters.users
    })
  }
}
</script>
