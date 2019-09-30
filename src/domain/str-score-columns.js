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

const chexmixScoreColumn = {
  name: 'chexmixScore',
  required: true,
  label: 'Chexmix',
  align: 'left',
  field: 'chexmixScore',
  sortable: true
}

const resistanceScoreColumn = {
  name: 'resistanceScore',
  required: true,
  label: 'Resistencia',
  align: 'left',
  field: 'resistanceScore',
  sortable: true
}

const strProvedSquadsScoreColumn = {
  name: 'strProvedSquadsScore',
  required: true,
  label: 'Capturas',
  align: 'left',
  field: 'strProvedSquadsScore',
  sortable: true
}

const totalColumn = {
  name: 'total',
  required: true,
  label: 'Total',
  align: 'left',
  field: 'total',
  sortable: true
}

export default [
  memberColumn,
  guildColumn,
  chexmixScoreColumn,
  resistanceScoreColumn,
  strProvedSquadsScoreColumn,
  totalColumn
]
