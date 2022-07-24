<template>
  <div class="block-inline-grid">
    <h1> Ooops </h1>

    <p> Your age is over our accepted limit. </p>
    <p> We are sorry but we canot insure you now. </p>
    
    <button class="p-button--brand" @click="$router.replace('/')">Ok :(</button>

  </div>

</template>
<script>
export default {
  name: 'error'
}
</script>
<style lang="scss" scoped>
.block-inline-grid {
  display: inline-grid;
}

</style>
