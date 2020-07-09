<template>
  <div id="app">
    <!-- <p>{{msg}}</p> -->
    <!-- <HelloWorld v-model="msg"/> -->
    <!-- <div v-for="item in list" :key="item.id" style="borderBottom:2px solid #333333">
      <component :is="item.type"></component>
    </div>-->
    <!-- <customDemo v-if="showCustom"></customDemo>
    <button @click="showCustom = true">点击加载组件</button>-->
    <!-- <TextDemo />
    <p>===============</p>
    {{this.$store.state.count}}
    <button @click="handleAddCount">加一</button>
    <p>++++++++++++++++++</p>
    {{this.$store.getters.getTableData('2')}}-->

    <table>
      <thead>
        <tr>
          <template v-for="item in tableData">
            <td :key="item.id" v-if="!item.sub.length" rowspan="2">{{item.name}}</td>
            <td :key="item.id" v-if="item.sub.length" colspan="2">{{item.name}}</td>
          </template>
        </tr>
        <tr>
          <template v-for="item in tableData">
            <template v-if="item.sub.length">
              <td :key="idx" v-for="(i,idx) in item.sub">{{i}}</td>
            </template>
          </template>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ImageDemo from './components/ImageDemo';
// import TextDemo from './components/TextDemo';
// import VideoDemo from './components/VideoDemo';
export default {
  name: "App",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: [
        {
          id: "1",
          type: "TextDemo"
        },
        {
          id: "4",
          type: "VideoDemo"
        },
        {
          id: "2",
          type: "TextDemo"
        },
        {
          id: "3",
          type: "ImageDemo"
        }
      ],
      showCustom: false,
      tableData: [
        {
          id: 1,
          name: "需求池",
          sub:[]
        },
        {
          id: 2,
          name: "就绪",
          sub:[]
        },
        {
          id: 3,
          name: "用户故事",
          sub:[]
        },
        {
          id: 4,
          name: "泳道",
          sub:[]
        },
        {
          id: 5,
          name: "工作列1",
          sub: ["进行中", "已完成"]
        },
        {
          id: 6,
          name: "工作列2",
          sub: ["进行中", "已完成"]
        },
        {
          id: 7,
          name: "已完成",
          sub:[]
        },
        {
          id: 8,
          name: "测试",
          sub: ["进行中", "已完成"]
        }
      ]
    };
  },
  components: {
    // HelloWorld,
    // ImageDemo,
    // TextDemo,
    // VideoDemo,
    // customDemo: () => import('./components/customDemo')
  },
  methods: {
    // handleAddCount(){
    //   this.$store.commit({
    //     type:'increment',
    //     addCount: 1
    //   })
    // }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
table {
  border-collapse: collapse;
}
td {
  border: 1px solid #cccccc;
  padding: 2px 5px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>
