<template>
  <div class="textdemo">
    <!-- {{this.$store.state.count}} -->
    {{countAlias}}
    <p>========+++++++</p>
    {{textDemoState}}
    <p>--------</p>
    {{count}}
    <p>-------mapGetters-------</p>
    {{doneCount}}
    <button @click="handleAddTenFn">加10</button>
  </div>
</template>

<script>
// eslint-disable-next-line

import { mapState, mapGetters} from 'vuex'
export default {
  name:'textdemo',
  methods:{
    handleAddTenFn(){
      // this.$store.commit('increment',10)
      this.$store.dispatch('setTimeIncrement',10)
    }
  },
  computed:{
    ...mapState({
      count:state => state.count,
      textDemoState:'count',
      countAlias(state){
        return state.count + 100
      }
    }),
    ...mapGetters({
      doneCount:'countPwo'
    })
  }
}
</script>
