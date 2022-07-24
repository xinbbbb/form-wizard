import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CountryList: [
      {
        label: 'Hong Kong',
        value: 'Hong Kong',
        currency: 'HKD',
        rate: 1
      },{
        label: 'USA',
        value: 'USA',
        currency: 'USD',
        rate: 2
      },{
        label: 'Australia',
        value: 'Australia',
        currency: 'AUD',
        rate: 3
      }
    ],
    PackageDropDown: [],
    form: {
      name: 'wangyx',
      age: 6,
      address: 'Hong Kong',
      packge: 0      
    },
  },
  getters: {
    PackageDropDown(state) {
      return [
        {
          label: 'Standard',
          value: 0
        },{
          label: `Safe( + ${ 0.5 * 10 * state.form.age * state.CountryList.find(i => i.label === state.form.address)?.rate }${ state.CountryList.find(i => i.label === state.form.address).currency }, 50%)`,
          value: 0.5
        },{
          label: `Super Safe( + ${ 0.75 * 10 * state.form.age * state.CountryList.find(i => i.label === state.form.address)?.rate }${ state.CountryList.find(i => i.label === state.form.address).currency }, 75%)`,
          value: 0.75
        }
      ]
    },
    formData(state) {
      return state.form
    }
  },
  mutations: {
    set_Form (state, payload) {
      state.form = payload
    }
  },
  actions: {
    set_Form (context, { payload }) {
      context.commit('set_Form', payload)
    },
    reset_Form(context) {
      context.commit('set_Form', {
        name: 'wangyx',
        age: 6,
        address: 'Hong Kong',
        packge: 0
      })
    }
  },
  modules: {
  }
})
