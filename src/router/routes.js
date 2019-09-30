
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/sign-in',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SignIn.vue') }
    ]
  },
  {
    path: '/guilds',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Guilds.vue') }
    ]
  },
  {
    path: '/guild/:guildId/gear',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Gear.vue') }
    ]
  },
  {
    path: '/guild/:guildId/roster',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Roster.vue') }
    ]
  },
  {
    path: '/guild/:guildId/str-score',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/StrScore.vue') }
    ]
  },
  {
    path: '/guild/:guildId/rating',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Rating.vue') }
    ]
  },
  {
    path: '/guild/:guildId/units',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GuildUnits.vue') }
    ]
  },
  {
    path: '/guild/:guildId/platoons',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GuildPlatoons.vue') }
    ]
  },
  {
    path: '/vortice/gear',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/VorticeGear.vue') }
    ]
  },
  {
    path: '/vortice/roster',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/VorticeRoster.vue') }
    ]
  },
  {
    path: '/vortice/rating',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/VorticeRating.vue') }
    ]
  },
  {
    path: '/vortice/str-score',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/VorticeStrScore.vue') }
    ]
  },
  {
    path: '/metas',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Metas.vue') }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/str-proven-squads',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/StrProvenSquads.vue') }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/users',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Users.vue') }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/platoons',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Platoons.vue') }
    ]
  },
  {
    path: '/stats',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/BaseStats.vue') }
    ]
  },
  {
    path: '/units-stats',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Stats.vue') }
    ]
  },
  {
    path: '/users-stats',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/UsersStats.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
