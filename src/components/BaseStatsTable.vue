<template>
  <div>
    <h4>Estadísticas Base Unidades</h4>
    <q-table
      title="Estadísticas Unidades"
      :data="stats"
      :columns="columns"
      :filter="filter"
      row-key="id"
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
      <template slot="body" slot-scope="props">
        <q-tr :props="props">
          <q-td key="unit" :props="props" auto-width>
            <UnitAvatar :unit-id="props.row.id" />
            {{ props.row.name }}
          </q-td>
          <q-td key="speed" :props="props">{{ props.row.speed }}</q-td>
          <q-td key="health" :props="props">{{ props.row.health }}</q-td>
          <q-td key="protection" :props="props">{{ props.row.protection }}</q-td>
          <q-td key="physicalDamage" :props="props">{{ props.row.physicalDamage }}</q-td>
          <q-td key="specialDamage" :props="props">{{ props.row.specialDamage }}</q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import columns from '@/domain/stats-base-columns'
import UnitAvatar from '@/components/UnitAvatar'

export default {
  name: 'BaseStatsTable',
  components: { UnitAvatar },
  props: {
    stats: Array
  },
  data: () => ({
    columns,
    pagination: {
      page: 1,
      rowsPerPage: 15
    },
    filter: ''
  })
}
</script>
