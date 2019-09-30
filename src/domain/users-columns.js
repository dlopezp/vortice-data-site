const usernameColumn = {
  name: 'username',
  required: true,
  label: 'username',
  align: 'left',
  field: 'id',
  sortable: true
}

const emailColumn = {
  name: 'email',
  required: true,
  label: 'Email',
  align: 'left',
  field: 'email',
  sortable: true
}

const rolesColumn = {
  name: 'roles',
  required: true,
  label: 'Roles',
  align: 'left',
  field: 'roles',
  sortable: true
}

export default [
  usernameColumn,
  emailColumn,
  rolesColumn
]
