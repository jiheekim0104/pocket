
import {createStore} from 'vuex'
import axios from 'axios'
// import _ from 'lodash'

export default createStore({
  state: {
    isLoading: true, 
    searchNum: '',
    findAll: [],
    // findOne: []
    types: [
    {
      name:'All' ,
      color: '#000000'
    }, {
      name: 'grass',
      color: '#B2FA5C'
    },{
      name:'fire',
      color:'#FF0000'
    },{
      name:'water',
      color:'#B4E5FF'
    },{
      name:'bug',
      color: '#FFB182'
    },{
      name: 'poison',
      color: '#9905D8'
    },{
      name: 'electric',
      color: '#FFEB5A	'
    },{
      name: 'ground',
      color: '#C39873'
    },{
      name: 'fairy',
      color: '#FFAAF5'
    },{
      name: 'fighting',
      color: '#EBA55A'
    },{
      name: 'psychic',
      color: '#46649B'
    },{
      name: 'rock',
      color: '#aaaaaa'
    },{
      name: 'ghost',
      color: ''
    },{
      name: 'ice',
      color: '#61F3EB	'
    },{
      name: 'dragon',
      color: '#FF8282'
    },
  ],
    findTypes :[]
  
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

    // resetSearchNum(state){
    //   state.searchNum = ''
    // },
    getTypeMember : function(state,typeName){
      console.log('getTypeMember 들어옴,선택타입:',typeName);
      const max = 300;
      var emptyTypes = [];
      
      for(let index=0;index<max;index++){
        if(state.findAll[index].types[0].type.name ==typeName){
          emptyTypes.push(state.findAll[index])
        }
      }
      state.findTypes = emptyTypes;
      console.log(state.findTypes);
    },
    // resetFindTypes(state){
    //   state.findTypes = []
    // }
  },   

  actions: {
    getListAll : async function(){
      console.log('getlistAll 들어옴');
      const max = 300;
      // const uniqueTypes = new Set(); // 중복을 제거할 Set 객체 생성

      for(let index=1;index<=max;index++){
        const response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)).data
        this.state.findAll.push(response)
        // console.log(response.types[0].type.name);
        // uniqueTypes.add(response.types[0].type.name)
        // this.state.types = Array.from(uniqueTypes);
      }
      this.state.isLoading = false;
      console.log(this.state.findAll);
      console.log('END');
      console.log(this.state.isLoading);
    },
  },

  getters: {
    getIsLoading(state){
      console.log('getIsLoading');
      console.log('isLoading',state.isLoading);
      return state.isLoading
    },
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
    },

    getFindTypes(state){
      console.log('findTypes');
      // console.log(state.findTypes);
      return state.findTypes
    }
  }
});
