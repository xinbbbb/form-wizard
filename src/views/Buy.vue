<template>
  <div class="buy">
    <h1> {{ title }}</h1>

    <form class="block-inline-grid width_35">
      <label for="Name">Name</label>
      <input v-model="form.name" type="text" id="Name" name="Name" placeholder="Please type name">

      <label for="Age">Age</label>
      <input v-model="form.age" type="number" id="Age" name="Age" min="6" max="120" placeholder="Please type age" oninput="if(value > 120)value = 120">

      <label for="Address">Where do you live</label>
      <select v-model="form.address">
        <option v-for="address in CountryList" :key="address.value" :value="address.value" >
          {{ address.label }}
        </option>
      </select>
      
      <label class="p-radio" v-for="packge in PackageDropDown" :key='packge.value'>
        <input type="radio" class="p-radio__input" :value="packge.value" v-model="form.packge">
        <span class="p-radio__label">{{ packge.label }}</span> 
      </label>

      <h3> Your premium is: {{ premium.total }}{{ premium.currency }}</h3>
      <FooterBtn confirmBtnTitle='Submit' @confirmBtnClick='submitForm'/>
    </form>
  </div>
</template>
<script>
import FooterBtn from '@/components/FooterBtn.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Buy',
  components: {
    FooterBtn
  },
  computed: {
    ...mapState({
      form: state => state.form,
      CountryList: state => state.CountryList
    }),
    ...mapGetters([
      'PackageDropDown',
    ]),
    premium() {
      return {
        total: ( 1 + this.form.packge ) * (10 * this.form.age) * this.CountryList.find(i => i.label === this.form.address)?.rate,
        currency: this.CountryList.find(i => i.label === this.form.address).currency
      }
    }
  },
  data: ()=> ({
    title: 'Tell us about yourself',
  }),
  methods: {
    ...mapActions(['set_Form']),
    submitForm() {
      if(this.form.age > 100 || this.form.age < 1) {
        this.$router.push('/error')
      } else {
        this.set_Form({ payload: { ...this.form, premium: this.premium }})
        this.$router.push({ path: '/summary' })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.block-inline-grid {
  display: inline-grid;
}
.width_35 {
  width: 35%;
}

</style>
