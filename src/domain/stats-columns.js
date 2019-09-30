const memberColumn = {
  name: 'name',
  required: true,
  label: 'Miembro',
  align: 'left',
  field: 'name',
  sortable: true
}

const guildNameColumn = {
  name: 'guild',
  required: true,
  label: 'Gremio',
  align: 'left',
  field: 'guild',
  sortable: true
}

// const roleColumn = {
//   name: 'role',
//   required: true,
//   label: 'Rol',
//   align: 'left',
//   field: 'role',
//   sortable: true
// }

const unitColumn = {
  name: 'unit',
  required: true,
  label: 'Unidad',
  align: 'left',
  field: 'unit',
  sortable: true
}

const levelColumn = {
  name: 'level',
  required: true,
  label: 'Nivel',
  align: 'left',
  field: 'level',
  sortable: true
}

const gearColumn = {
  name: 'gear',
  required: true,
  label: 'Gear',
  align: 'left',
  field: 'gear',
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

const speedBaseColumn = {
  name: 'speedBase',
  required: true,
  label: 'Velocidad Base',
  align: 'left',
  field: 'speedBase',
  sortable: true
}

const speedBonusColumn = {
  name: 'speedBonus',
  required: true,
  label: 'Bonus Velocidad',
  align: 'left',
  field: 'speedBonus',
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

const healthBaseColumn = {
  name: 'healthBase',
  required: true,
  label: 'Salud Base',
  align: 'left',
  field: 'healthBase',
  sortable: true
}

const healthBonusColumn = {
  name: 'healthBonus',
  required: true,
  label: 'Bonus Salud',
  align: 'left',
  field: 'healthBonus',
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

const physicalDamageBaseColumn = {
  name: 'physicalDamageBase',
  required: true,
  label: 'Daño físico Base',
  align: 'left',
  field: 'physicalDamageBase',
  sortable: true
}

const physicalDamageBonusColumn = {
  name: 'physicalDamageBonus',
  required: true,
  label: 'Bonus Daño físico',
  align: 'left',
  field: 'physicalDamageBonus',
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

const specialDamageBaseColumn = {
  name: 'specialDamageBase',
  required: true,
  label: 'Daño Especial Base',
  align: 'left',
  field: 'specialDamageBase',
  sortable: true
}

const specialDamageBonusColumn = {
  name: 'specialDamageBonus',
  required: true,
  label: 'Bonus Daño Especial',
  align: 'left',
  field: 'specialDamageBonus',
  sortable: true
}

// const armorColumn = {
//   name: 'armor',
//   required: true,
//   label: 'Armadura',
//   align: 'left',
//   field: 'armor',
//   sortable: true
// }

// const resistanceColumn = {
//   name: 'resistance',
//   required: true,
//   label: 'Resistencia',
//   align: 'left',
//   field: 'resistance',
//   sortable: true
// }

const protectionColumn = {
  name: 'protection',
  required: true,
  label: 'Protección',
  align: 'left',
  field: 'protection',
  sortable: true
}

const protectionBaseColumn = {
  name: 'protectionBase',
  required: true,
  label: 'Protección Base',
  align: 'left',
  field: 'protectionBase',
  sortable: true
}

const protectionBonusColumn = {
  name: 'protectionBonus',
  required: true,
  label: 'Bonus Protección',
  align: 'left',
  field: 'protectionBonus',
  sortable: true
}

const pgColumn = {
  name: 'pg',
  required: true,
  label: 'PG',
  align: 'left',
  field: 'pg',
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

const scoreColumn = {
  name: 'score',
  required: true,
  label: 'Puntuación',
  align: 'left',
  field: 'score',
  sortable: true
}

export default [
  unitColumn,
  // roleColumn,
  memberColumn,
  guildNameColumn,

  speedColumn,
  speedBaseColumn,
  speedBonusColumn,

  healthColumn,
  healthBaseColumn,
  healthBonusColumn,

  protectionColumn,
  protectionBaseColumn,
  protectionBonusColumn,

  physicalDamageColumn,
  physicalDamageBaseColumn,
  physicalDamageBonusColumn,

  specialDamageColumn,
  specialDamageBaseColumn,
  specialDamageBonusColumn,

  scoreColumn,
  // armorColumn,
  // resistanceColumn,
  gearColumn,
  levelColumn,
  pgColumn,
  zetasColumn
]
