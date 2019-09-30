<template>
  <div>
    <q-dialog
        v-model="show"
        stack-buttons
        prevent-close
        @ok="onOk"
      >
        <span slot="title">Nuevo usuario</span>

        <div slot="body">
          <q-field
            label="Username"
            orientation="vertical"
            :error="$v.user.username.$error"
          >
            <q-input v-model="user.username" />
          </q-field>

          <q-field
            label="Email"
            orientation="vertical"
            :error="$v.user.email.$error"
          >
            <q-input v-model="user.email" />
          </q-field>

          <q-field :error="$v.user.roles.$error">
            <!-- <q-btn-toggle
              v-model="role"
              toggle-color="primary"
              :options="roles"
            /> -->
            <q-select
              multiple
              chips
              v-model="user.roles"
              :options="roles"
              float-label="Roles"
            />
          </q-field>
        </div>

        <template slot="buttons" slot-scope="props">
          <q-btn color="primary" label="Crear" :disabled="$v.user.$invalid" @click="props.ok" />
          <q-btn flat label="Cancelar" @click="props.cancel" />
        </template>
      </q-dialog>

      <q-btn
        round
        color="primary"
        @click="openDialog"
        icon="add"
        class="fixed"
        style="right: 18px; bottom: 18px"
      />
    </div>
</template>

<script>
import { roles } from '@/services/auth'
import { required, email, minLength } from 'vuelidate/lib/validators'

import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'
import { types as actions } from '@/store/vortice/actions'

const { mapGetters, mapActions } = createNamespacedHelpers(vorticeStore)

const blankUser = {
  roles: [ ],
  username: '',
  email: ''
}

export default {
  name: 'NewUserDialog',
  data () {
    return {
      show: false,
      user: { ...blankUser }
    }
  },
  validations: {
    user: {
      roles: {
        minLength: minLength(1),
        required
      },
      username: required,
      email: {
        email,
        required
      }
    }
  },
  computed: {
    ...mapGetters({
      guilds: getters.guilds
    }),
    roles () {
      return [
        { label: 'Administrador', value: roles.ADMIN },
        ...Object.values(this.guilds).map(guild => ({ label: `Official ${guild.name}`, value: `${roles.OFFICIAL}_${guild.id}` }))
      ]
    }
  },
  methods: {
    ...mapActions({
      createUser: actions.createUser
    }),
    openDialog () {
      this.show = true
    },
    onOk () {
      this.$q.loading.show()
      const user = { ...this.user }
      this.createUser({ user })
        .then(
          () => {
            this.$q.loading.hide()
            this.$q.notify({
              message: 'Usuario creado !',
              type: 'positive',
              color: 'positive'
            })
            this.user = { ...blankUser }
          }
        )
        .catch(
          () => {
            this.$q.loading.hide()
            this.$q.notify({
              message: 'Ha habido un error al crear el usuario',
              type: 'warning',
              color: 'warning'
            })
          }
        )
    }
  }
}
</script>
