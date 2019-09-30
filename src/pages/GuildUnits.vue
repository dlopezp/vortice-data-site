<template>
  <q-page padding>
    <h4>Pelotones - {{ guildName }}</h4>
    <q-table
      title="Unidades"
      :data="data"
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
        <q-select
          v-model="alignment"
          :options="alignments"
        />
        <q-select
          v-model="unitType"
          :options="unitTypes"
        />
        <q-select
          v-model="stars"
          :options="starsSelectOptions"
        />
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
        />
      </template>

      <template slot="body" slot-scope="props">
        <q-tr :props="props">
          <q-td key="image" :props="props" auto-width>
            <UnitAvatar :unit-id="props.row.id" />
          </q-td>
          <q-td key="name" :props="props">
            <q-checkbox color="primary" v-model="props.expand" checked-icon="remove" unchecked-icon="add" class="q-mr-md" :disable="!props.row.total" />
            {{ props.row.name }}
          </q-td>
          <q-td key="total" :props="props">{{ props.row.total }}</q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <q-chip v-for="player in props.row.players" :key="player">{{ playerName(player, guildId) }}</q-chip>
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <q-chip color="orange" v-for="player in props.row.lost" :key="player">{{ playerName(player, guildId) }}</q-chip>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'

import UnitAvatar from '@/components/UnitAvatar'

import UnitType from '@/domain/unit-type'
import Alignment from '@/domain/alignment'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

export default {
  name: 'GuildUnitsPage',
  components: { UnitAvatar },
  computed: {
    ...mapGetters({
      guildName: getters.currentGuildName,
      guildId: getters.currentGuildId,
      gear: getters.currentGear,
      units: getters.currentUnits,
      playerName: getters.playerName,
      baseUnits: getters.units
    }),
    allyCodes () {
      return this.gear.map(gear => gear.id)
    },
    data () {
      const baseStars = [ 0, 1, 2, 3, 4, 5, 6, 7 ].slice(this.stars)

      const data = this.units
        .filter(unit => {
          return !this.unitType || unit.type === this.unitType
        })
        .filter(unit => {
          return !this.alignment || unit.alignment === this.alignment
        })
        .map(
          unit => {
            return {
              ...unit,
              ...baseStars.reduce(
                (carry, stars) => ({
                  total: carry.total + unit[stars].length,
                  players: carry.players.concat(unit[stars])
                }),
                { total: 0, players: [] }
              )
            }
          }
        )
        .map(
          unit => {
            return {
              ...unit,
              lost: this.allyCodes.filter(allyCode => !unit.players.includes(allyCode))
            }
          }
        )

      return data
    }
  },
  data: () => ({
    stars: 7,
    alignment: '',
    alignments: [
      {
        label: 'Todo',
        value: ''
      },
      {
        label: 'Luminoso',
        value: Alignment.LIGHT
      },
      {
        label: 'Oscuro',
        value: Alignment.DARK
      }
    ],
    unitType: '',
    unitTypes: [
      {
        label: 'Todo',
        value: ''
      },
      {
        label: 'Tropas',
        value: UnitType.CHARACTER
      },
      {
        label: 'Naves',
        value: UnitType.SHIP
      }
    ],
    starsSelectOptions: [
      {
        label: '2 Estrellas',
        value: 2
      },
      {
        label: '3 Estrellas',
        value: 3
      },
      {
        label: '4 Estrellas',
        value: 4
      },
      {
        label: '5 Estrellas',
        value: 5
      },
      {
        label: '6 Estrellas',
        value: 6
      },
      {
        label: '7 Estrellas',
        value: 7
      }
    ],
    columns: [
      {
        name: 'image',
        required: true,
        label: '',
        align: 'left',
        field: 'image',
        sortable: false
      },
      {
        name: 'name',
        required: true,
        label: 'Nombre',
        align: 'left',
        field: 'name',
        sortable: true
      },
      {
        name: 'total',
        required: true,
        label: 'Total',
        align: 'left',
        field: 'total',
        sortable: true
      }
    ],
    pagination: {
      page: 1,
      rowsPerPage: 15
    },
    filter: ''
  })
}
</script>

<style lang="stylus" scoped>
  >>> .q-select
    margin-left .5rem
</style>
