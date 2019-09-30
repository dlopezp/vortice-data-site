<template>
  <q-page padding>

    <h4>PJ/Naves raros</h4>
    <q-table
      :data="tableData"
      :columns="columns"
      row-key="name"
      :pagination.sync="pagination"
      />
    <div class="row">
      <div class="row-4"></div>
    </div>

  </q-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { name as vorticeStore } from '@/store/vortice'
import { types as getters } from '@/store/vortice/getters'

const { mapGetters } = createNamespacedHelpers(vorticeStore)

const nameColumn = {
  name: 'name',
  required: true,
  label: 'Unidad',
  align: 'left',
  field: 'name',
  sortable: true
}

const sixStarsColumn = {
  name: 'sixStars',
  required: true,
  label: '6 Estrellas',
  align: 'left',
  field: 'sixStars',
  sortable: true
}

const sevenStarsColumn = {
  name: 'sevenStars',
  required: true,
  label: '7 Estrellas',
  align: 'left',
  field: 'sevenStars',
  sortable: true
}

const columns = [
  nameColumn,
  sixStarsColumn,
  sevenStarsColumn
]

export default {
  name: 'PlatoonsPage',
  data () {
    return {
      columns,
      pagination: {
        page: 1,
        rowsPerPage: 50
      }
    }
  },
  computed: {
    ...mapGetters({
      platoons: getters.platoonRequirements,
      units: getters.units
    }),
    tableData () {
      return Object.keys(this.platoons)
        .map(unitId => {
          return {
            name: this.units[unitId].name,
            sixStars: this.platoons[unitId][6],
            sevenStars: this.platoons[unitId][7]
          }
        })
    }
  },
  created () {
    if (Object.keys(this.platoons).length) return

    this.$q.loading.show()
  }
}
</script>
