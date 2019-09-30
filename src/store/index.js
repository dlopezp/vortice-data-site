import Vue from 'vue'
import Vuex from 'vuex'

import vortice from './vortice'
import auth from './auth'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      vortice,
      auth
    }
  })

  // TODO: move to module plugin
  Store.subscribe(
    (mutation, state) => {
      const mutationToSubscribe = `${vortice.name}/${vortice.mutationsTypes.setMetas}`
      if (mutation.type !== mutationToSubscribe) return

      const mutationToCall = `${vortice.name}/${vortice.mutationsTypes.setPlayerMetas}`
      Store.commit(mutationToCall, mutation.payload)
    }
  )

  return Store
}
