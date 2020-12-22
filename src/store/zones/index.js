import zoneAPI from '@/services/api/zone'

const module = {
  namespaced: true,
  state: {
    data: [],

    table_loading: false,
    btn_loading: false
  },

  actions: {
    async initLocationsZones({
      commit
    }) {
      commit('TABLE_LOAD')
      commit('locations/TABLE_LOAD', null, { root: true })

      try {
        const response = await zoneAPI.initLocationsZones()

        commit('SET_DATA', response.data.zones)
        commit('locations/SET_DATA', response.data.locations, { root: true })
      } catch (error) {
        console.log(error.response)
      } finally {
        commit('locations/TABLE_LOADED', null, { root: true })
        commit('TABLE_LOADED')
      }
    },
    async getZones({
      commit
    }) {
      commit('TABLE_LOAD')

      try {
        const response = await zoneAPI.getZones()

        commit('SET_DATA', response.data)
      } catch (error) {
        console.log(error.response)
      } finally {
        commit('TABLE_LOADED')
      }
    },
    async addZone({
      commit
    }, data) {
      commit('BTN_LOAD')

      try {
        const response = await zoneAPI.addZone(data)
      } catch (error) {
        console.log(error)
      } finally {
        commit('BTN_LOADED')
      }
    },
    async updateZone({
      commit
    }, data) {
      commit('BTN_LOAD')

      try {
        await zoneAPI.updateZone(data)
      } catch (error) {
        console.log(error)
      } finally {
        commit('BTN_LOADED')
      }
    }
  },

  mutations: {
    TABLE_LOAD(state) {
      state.table_loading = true
    },
    TABLE_LOADED(state) {
      state.table_loading = false
    },
    BTN_LOAD(state) {
      state.btn_loading = true
    },
    BTN_LOADED(state) {
      state.btn_loading = false
    },
    SET_DATA(state, zones) {
      state.data = zones
    }
  },

  getters: {
    extendedZones: (state) => {
      const _zoness = state.data.slice()

      _zoness.unshift({
        id: 0,
        name: 'Not Assigned'
      })

      return _zoness
    },
    zoneName: (state) => (id) => {
      const _zone = state.data.find((zone) => zone.id === id)

      return _zone ? _zone.name : 'Not Assigned'
    }
  }
}

export default module