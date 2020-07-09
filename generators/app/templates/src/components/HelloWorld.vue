<template>
  <div class="hello">
    <input type="text"
      :value="msg"
      @input="$emit('changeInput',$event.target.value)"
      >
  </div>
</template>
<script>
/* v-model是如何实现双向绑定的？
v-model是用来在表单控件或者组件上创建双向绑定的
他的本质是v-bind和v-on的语法糖
在一个组件上使用v-model，默认会为组件绑定名为value的prop和名为input的事件 */
export default {
  name: 'HelloWorld',
  model:{
    prop: 'msg',
    event: 'changeInput'
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
