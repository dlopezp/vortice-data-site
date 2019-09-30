<template>
  <div>
    <h4>Roster - {{ title }}</h4>
    <q-table
      title="Roster"
      :data="roster"
      :columns="columns"
      :filter="filter"
      row-key="id"
      :pagination.sync="pagination">

      <template slot="top-left" slot-scope="props">
        <q-search
          hide-underline
          color="secondary"
          v-model="filter"
          class="col-6"
        />
      </template>
      <template slot="top-right" slot-scope="props">
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
import columns from '@/domain/roster-columns'

export default {
  name: 'RosterTable',
  props: {
    roster: Array,
    title: String
  },
  data () {
    return {
      columns,
      pagination: {
        page: 1,
        rowsPerPage: 15
      },
      filter: ''
    }
  }
}
</script>
