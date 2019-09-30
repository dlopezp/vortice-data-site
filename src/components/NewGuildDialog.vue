<template>
  <div>
    <q-dialog
        v-model="show"
        stack-buttons
        prevent-close
        @ok="onOk"
      >
        <span slot="title">Nuevo gremio</span>

        <div slot="body">
          <q-field
            label="Código de aliado del líder"
            orientation="vertical"
            :error="$v.guild.leaderAllyCode.$error"
          >
            <q-input v-model="guild.leaderAllyCode" />
          </q-field>

          <q-card v-if="preview">
            <q-card-title>
              {{ preview.name }}
              <div slot="right" class="row items-center">
                <GuildIcon :guild="preview" />
              </div>
            </q-card-title>
            <q-card-separator />
            <q-card-main>
              <q-list>
                <q-item>
                  <q-item-main>
                    <q-item-tile label>PG</q-item-tile>
                    <q-item-tile sublabel>{{ preview.gp.toLocaleString() }}</q-item-tile>
                  </q-item-main>
                  <q-item-main>
                    <q-item-tile label>Miembros</q-item-tile>
                    <q-item-tile sublabel>{{ preview.allyCodes.length }}</q-item-tile>
                  </q-item-main>
                </q-item>
              </q-list>
            </q-card-main>
          </q-card>

        </div>

        <template slot="buttons" slot-scope="props">
          <q-btn color="primary" label="Buscar" v-if="!preview" :disabled="$v.guild.$invalid" @click="searchGuild" />
          <q-btn color="primary" label="Registrar" v-if="preview" :disabled="$v.guild.$invalid" @click="props.ok" />
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
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'
import { types as actions } from '@/store/vortice/actions'

import GuildIcon from '@/components/GuildIcon'

const { mapGetters, mapActions } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'NewGuildDialog',
  components: { GuildIcon },
  data () {
    return {
      show: false,
      preview: null,
      guild: {
        leaderAllyCode: ''
      }
    }
  },
  validations: {
    guild: {
      leaderAllyCode: { required, minLength: minLength(9), maxLength: maxLength(9) }
    }
  },
  computed: {
    ...mapGetters({
      guilds: getters.guilds
    })
  },
  methods: {
    ...mapActions({
      createGuild: actions.createGuild,
      previewGuild: actions.previewGuild
    }),
    openDialog () {
      this.show = true
    },
    async searchGuild () {
      this.$q.loading.show()
      this.preview = await this.previewGuild({ leaderAllyCode: this.guild.leaderAllyCode })
      this.$q.loading.hide()
    },
    async onOk () {
      await this.createGuild({ guild: this.preview })
      this.preview = null
    }
  }
}
</script>
