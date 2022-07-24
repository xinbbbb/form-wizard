<template>
  <div class="block-inline-grid">
    <h1> Summary </h1>
    <p>Name: {{ formData.name }} </p>
    <p>Age: {{ formData.age }} </p>
    <p>Where do you live: {{ formData.address }} </p>
    <p>Packge: {{ PackageDropDown.find(v => v.value === formData.packge).label }} </p>
    <p>Premium: {{ formData.premium.total }}{{ formData.premium.currency }} </p>

    <FooterBtn confirmBtnTitle='Buy' @confirmBtnClick='submitBuy'/>
  </div>
  
</template>
<script>
import FooterBtn from '@/components/FooterBtn.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Summary',
  computed: {

    ...mapGetters([
      'PackageDropDown',
      'formData',
    ])
  },
  components: {
    FooterBtn
  },
  methods: {
    ...mapActions(['reset_Form']),
    submitBuy() {
      this.reset_Form()
      this.$router.replace('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.block-inline-grid {
  display: inline-grid;
}

</style>