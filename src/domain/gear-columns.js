const allyCodeColumn = {
  name: 'id',
  required: true,
  label: 'AllyCode',
  align: 'left',
  field: 'id',
  sortable: true
}

const memberColumn = {
  name: 'name',
  required: true,
  label: 'Miembro',
  align: 'left',
  field: 'name',
  sortable: true
}

const guildColumn = {
  name: 'guild',
  required: true,
  label: 'Gremio',
  align: 'left',
  field: 'guild',
  sortable: true
}

const hasSwgohGgAccountColumn = {
  name: 'hasSwgohGgAccount',
  required: true,
  label: 'swgoh.gg',
  align: 'left',
  field: 'hasSwgohGgAccount',
  sortable: true,
  style: 'display: none;'
}

const totalPGColumn = {
  name: 'power',
  required: true,
  label: 'PG Total',
  align: 'left',
  field: 'power',
  sortable: true
}

const charactersPgColumn = {
  name: 'charactersPower',
  required: true,
  label: 'PG Personajes',
  align: 'left',
  field: 'charactersPower',
  sortable: true
}

const topCharactersPGColumn = {
  name: 'topCharactersPG',
  required: true,
  label: 'PG XI/XII',
  align: 'left',
  field: 'topCharactersPG',
  sortable: true
}

const topCharactersTotalColumn = {
  name: 'topCharactersTotal',
  required: true,
  label: '# XI/XII',
  align: 'left',
  field: 'topCharactersTotal',
  sortable: true
}

const topCharactersPercentColumn = {
  name: 'topCharactersPercent',
  required: true,
  label: '% XI/XII',
  align: 'left',
  field: 'topCharactersPercent',
  sortable: true
}

const zetasColumn = {
  name: 'zetas',
  required: true,
  label: 'Zetas',
  align: 'left',
  field: 'zetas',
  sortable: true
}

const vorticeScoreColumn = {
  name: 'vorticeScore',
  required: true,
  label: 'VorticeScore',
  align: 'left',
  field: 'vorticeScore',
  sortable: true
}

export default [
  allyCodeColumn,
  memberColumn,
  guildColumn,
  hasSwgohGgAccountColumn,
  totalPGColumn,
  charactersPgColumn,
  topCharactersPGColumn,
  topCharactersTotalColumn,
  topCharactersPercentColumn,
  zetasColumn,
  vorticeScoreColumn
]
