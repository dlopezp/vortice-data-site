<template>
  <div>
    <h4>Puntuación Equipos STR - {{ title }}</h4>
    <q-table
      title="Puntuación Equipos STR"
      :data="strScore"
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
    </q-table>
  </div>
</template>

<script>
import columns from '@/domain/str-score-columns'

export default {
  name: 'STRScoreTable',
  props: {
    strScore: Array,
    title: String
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
