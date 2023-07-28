
import {createStore} from 'vuex'
import axios from 'axios'
// import _ from 'lodash'

export default createStore({
  state: {
    searchNum: '',
    findAll: [],
    // findOne: []
    types: []
  },
  
  mutations: {
    getInputValue: function(state,searchNum){
      console.log('숫자:',searchNum);
      state.searchNum = searchNum;
    },

    // getList: function (state) {
    //   console.log('getlist 들어옴');
    //   console.log(state);
    //   var url = 'https://pokeapi.co/api/v2/pokemon/'+state.searchNum
    //   axios.get(url).then(response => {
    //     // console.log('### response: ' + JSON.stringify(response))
    //     // console.log(response.data);
    //     state.findOne[0] = (response.data) 
    //   }).catch(error => {
    //     console.log(error)
    //   })
    //   console.log('findOne:',state.findOne);
    // },
     
  },   

  actions: {
    getListAll : async function(){
      console.log('getlistAll 들어옴');
      const max = 300;
      const uniqueTypes = new Set(); // 중복을 제거할 Set 객체 생성

      for(let index=1;index<=max;index++){
        const response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)).data
        this.state.findAll.push(response)
        // console.log(response.types[0].type.name);
        uniqueTypes.add(response.types[0].type.name)
        this.state.types = Array.from(uniqueTypes);
      }
    }
  },

  getters: {
    // getOne(state){
    //   console.log('getOne');
    //   console.log(state.findOne[0]);
    //   return state.findOne[0]
    // },
    getAll(state){
      console.log('getAll');
      console.log('findAll:',state.findAll);
      return state.findAll
    },

    getSearchNum(state){
      return state.searchNum
    },

    getTypes(state){
      console.log('getTypes');
      // console.log(state.types);
      return state.types
    }
  }
});
