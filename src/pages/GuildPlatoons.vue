<template>
  <q-page padding>
    <h4>Pelotones - {{ guildName }}</h4>

    <q-select
      v-model="alignment"
      :options="alignments"
    />
    <q-select
      v-model="phase"
      :options="phases"
      :disabled="!alignment"
    />

    <q-list>
      <PlatoonTerritory
        v-for="(data, key) in phaseData.territories"
        :key="key"
        :data="data.platoons"
        :name="key"
        :impossibleUnits="impossibleUnits"
        :hardUnits="hardUnits"
        :difficultUnits="difficultUnits"
        v-on:activate-platoon="onActivatePlatoon"
        v-on:deactivate-platoon="onDeactivatePlatoon"
        />
    </q-list>

    <ShortUnitsReport :units="shortUnits" :guildUnits="guildUnits" />
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'

import PlatoonTerritory from '@/components/PlatoonTerritory'
import ShortUnitsReport from '@/components/ShortUnitsReport'

import Platoons from '@/domain/platoons'

// import Utils from '@/services/utils'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

const TBTypes = {
  HothDS: 'HothDS',
  HothLS: 'HothLS',
  GeonosisDS: 'GeonosisDS'
}

const PlatoonsAligment = {
  [TBTypes.HothDS]: Platoons.DS,
  [TBTypes.HothLS]: Platoons.LS,
  [TBTypes.GeonosisDS]: Platoons.GeonosisDS
}

export default {
  name: 'GuildPlatoonsPage',
  components: { PlatoonTerritory, ShortUnitsReport },
  computed: {
    ...mapGetters({
      guildName: getters.currentGuildName,
      guildId: getters.currentGuildId,
      units: getters.currentUnits,
      playerName: getters.playerName,
      baseUnits: getters.units
    }),
    shortUnits () {
      return [ ...Object.keys(this.hardUnits), ...Object.keys(this.difficultUnits) ]
    }
  },
  data: () => ({
    stars: 0,
    alignment: '',
    alignments: [
      {
        label: '',
        value: ''
      },
      {
        label: 'Luminoso',
        value: TBTypes.HothLS
      },
      {
        label: 'Oscuro',
        value: TBTypes.HothDS
      },
      {
        label: 'Geonosis DS',
        value: TBTypes.GeonosisDS
      }
    ],
    phase: '',
    phases: [
      {
        label: '',
        value: ''
      },
      {
        label: '1',
        value: 1
      },
      {
        label: '2',
        value: 2
      },
      {
        label: '3',
        value: 3
      },
      {
        label: '4',
        value: 4
      },
      {
        label: '5',
        value: 5
      },
      {
        label: '6',
        value: 6
      }
    ],
    sideData: {},
    phaseData: {},
    impossibleUnits: {},
    hardUnits: {},
    difficultUnits: {},
    guildUnits: {}
  }),
  watch: {
    alignment () {
      this.updateData()
    },
    phase () {
      this.updateData()
    }
  },
  methods: {
    updateData () {
      if (!this.phase || !this.alignment) {
        this.resetData()
        return
      }

      this.impossibleUnits = {}
      this.hardUnits = {}
      this.difficultUnits = {}

      this.sideData = PlatoonsAligment[this.alignment]
      this.phaseData = { ...this.sideData[this.phase] }

      this.stars = this.phaseData.stars
      const baseStars = [ 0, 1, 2, 3, 4, 5, 6, 7 ].slice(this.stars)

      const unitRequirements = Object.keys(this.phaseData.territories)
        .map(territoryLabel => {
          return Object.values(this.phaseData.territories[territoryLabel].platoons)
        })
        .map(territory => {
          return territory.filter(platoon => platoon.active).reduce((carry, platoon) => ([ ...carry, ...platoon.units ]), [])
        })
        .reduce(
          (carry, territory) => ([ ...carry, ...territory ]),
          []
        )
      this.guildUnits = this.units.reduce(
        (carry, unit) => {
          const unitData = {
            id: unit.id,
            total: baseStars.reduce((carry, stars) => ([ ...carry, ...unit[stars] ]), [])
          }
          return { ...carry, [unit.id]: unitData }
        },
        {}
      )

      const data = {}
      unitRequirements.forEach(
        unitKey => {
          const guildUnit = this.guildUnits[unitKey]
          const unitData = data[unitKey] || { required: 0, existent: guildUnit ? guildUnit.total.length : 0 }
          unitData.required++

          data[unitKey] = unitData
        }
      )

      Object.keys(data)
        .forEach(
          unitKey => {
            const unitData = data[unitKey]
            const offset = unitData.existent - unitData.required

            if (offset < 0) {
              this.impossibleUnits[unitKey] = true
            } else if (offset < 2) {
              this.hardUnits[unitKey] = true
            } else if (offset < 5) {
              this.difficultUnits[unitKey] = true
            }
          }
        )

      // this.phaseData = phaseData
      this.impossibleUnits = { ...this.impossibleUnits }
      this.hardUnits = { ...this.hardUnits }
      this.difficultUnits = { ...this.difficultUnits }
      // this.guildUnits = guildUnits
    },
    resetData () {
      this.data = {}
      this.sideData = {}
      this.phaseData = {}
    },
    onActivatePlatoon ({ territory, platoon }) {
      this.phaseData.territories[territory].platoons[platoon].active = true
      this.resetData()
      this.updateData()
    },
    onDeactivatePlatoon ({ territory, platoon }) {
      this.phaseData.territories[territory].platoons[platoon].active = false
      this.resetData()
      this.updateData()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
