<template>
  <div>
    <button @click.prevent="$router.back()">Back</button>
    <button class="p-button--brand" @click.prevent="$emit('confirmBtnClick')">{{ confirmBtnTitle }}</button>
  </div>
  
</template>
<script>
export default {
  name: 'FooterBtn',
  props: {
    confirmBtnTitle: String
  }
}
</script>