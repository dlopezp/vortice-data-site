const unitColumn = {
  name: 'unit',
  required: true,
  label: 'Unidad',
  align: 'left',
  field: 'unit',
  sortable: true
}

const speedColumn = {
  name: 'speed',
  required: true,
  label: 'Velocidad',
  align: 'left',
  field: 'speed',
  sortable: true
}

const healthColumn = {
  name: 'health',
  required: true,
  label: 'Salud',
  align: 'left',
  field: 'health',
  sortable: true
}

const physicalDamageColumn = {
  name: 'physicalDamage',
  required: true,
  label: 'Daño físico',
  align: 'left',
  field: 'physicalDamage',
  sortable: true
}

const specialDamageColumn = {
  name: 'specialDamage',
  required: true,
  label: 'Daño Especial',
  align: 'left',
  field: 'specialDamage',
  sortable: true
}

const protectionColumn = {
  name: 'protection',
  required: true,
  label: 'Protección',
  align: 'left',
  field: 'protection',
  sortable: true
}

export default [
  unitColumn,
  speedColumn,
  healthColumn,
  protectionColumn,
  physicalDamageColumn,
  specialDamageColumn
]
