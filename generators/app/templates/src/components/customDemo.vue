<template>
  <div class="custom">
    {{inputValue}}
    <p>------------</p>
    <input type="text" v-model="inputValue">
  </div>
</template>
<script>
export default {
  name:'custom',
  data(){
    return {
      inputValue:'123'
    }
  }
}
</script>
