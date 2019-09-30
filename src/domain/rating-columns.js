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

// const totalBtRequirementsColumn = {
//   name: 'totalBtRequirements',
//   required: true,
//   label: 'BdT Requisitos',
//   align: 'left',
//   field: 'totalBtRequirements',
//   sortable: true
// }

// const totalBtPlattonsColumn = {
//   name: 'totalBtPlattons',
//   required: true,
//   label: 'BdT Pelotones',
//   align: 'left',
//   field: 'totalBtPlattons',
//   sortable: true
// }

const totalTopCharactersPowerColumn = {
  name: 'totalTopCharactersPower',
  required: true,
  label: 'PG GXI/GXII/GXIII',
  align: 'left',
  field: 'totalTopCharactersPower',
  sortable: true
}

const totalTopCharactersColumn = {
  name: 'totalTopCharacters',
  required: true,
  label: 'GT GXI/GXII/GXIII',
  align: 'left',
  field: 'totalTopCharacters',
  sortable: true
}

const totalGearElevenCharactersColumn = {
  name: 'totalGearElevenCharacters',
  required: true,
  label: 'GT GXI',
  align: 'left',
  field: 'totalGearElevenCharacters',
  sortable: true
}

const totalGearTwelveCharactersColumn = {
  name: 'totalGearTwelveCharacters',
  required: true,
  label: 'GT GXII',
  align: 'left',
  field: 'totalGearTwelveCharacters',
  sortable: true
}

const totalGearThirteenCharactersColumn = {
  name: 'totalGearThirteenCharacters',
  required: true,
  label: 'GT GXIII',
  align: 'left',
  field: 'totalGearThirteenCharacters',
  sortable: true
}

const totalMetaGearElevenCharactersColumn = {
  name: 'totalMetaGearElevenCharacters',
  required: true,
  label: 'Metas GXI',
  align: 'left',
  field: 'totalMetaGearElevenCharacters',
  sortable: true
}

const totalMetaGearTwelveCharactersColumn = {
  name: 'totalMetaGearTwelveCharacters',
  required: true,
  label: 'Metas GXII',
  align: 'left',
  field: 'totalMetaGearTwelveCharacters',
  sortable: true
}

const totalMetaGearThirteenCharactersColumn = {
  name: 'totalMetaGearThirteenCharacters',
  required: true,
  label: 'Metas GXIII',
  align: 'left',
  field: 'totalMetaGearThirteenCharacters',
  sortable: true
}

// const strScoreColumn = {
//   name: 'strScore',
//   required: true,
//   label: 'STR',
//   align: 'left',
//   field: 'strScore',
//   sortable: true
// }

const totalScoreColumn = {
  name: 'totalScore',
  required: true,
  label: 'Total',
  align: 'left',
  field: 'totalScore',
  sortable: true
}

export default [
  guildNameColumn,
  memberColumn,
  // totalBtRequirementsColumn,
  // totalBtPlattonsColumn,
  totalTopCharactersPowerColumn,
  totalTopCharactersColumn,
  totalGearElevenCharactersColumn,
  totalGearTwelveCharactersColumn,
  totalGearThirteenCharactersColumn,
  totalMetaGearElevenCharactersColumn,
  totalMetaGearTwelveCharactersColumn,
  totalMetaGearThirteenCharactersColumn,
  // strScoreColumn,
  totalScoreColumn
]
