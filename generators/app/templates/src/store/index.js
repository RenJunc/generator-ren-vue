import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0,
    tableData: [{
      id: '1',
      date: '2016-05-02',
      name: '赵本山',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      id: '2',
      date: '2016-05-04',
      name: '范伟',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      id: '3',
      date: '2016-05-01',
      name: '宋晓峰',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      id: '4',
      date: '2016-05-03',
      name: '张可',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  },
  mutations:{
    increment(state,payload){
      state.count += payload.addCount
    }
  },
  actions:{
    setTimeIncrement({commit}, payload){
      setTimeout(()=>{
        commit({
          type:'increment',
          addCount: payload
        })
      },1000)
    }
  },
  getters:{
    countPwo:state=>{
      return state.count * 2
    },
    getTableData:(state)=>(id)=>{
      return state.tableData.find(todo => todo.id === id)
    }
  }
})
