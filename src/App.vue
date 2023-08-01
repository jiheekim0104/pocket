<template>
  <div id="app" >
    <div class="loading" v-if="getIsLoading">
      <div class="loadBox">
        <img src="./assets/Fountain.gif"><br>
        포켓볼을 수집중 입니다...
      </div>
    </div>
    
    <div>
      <app-header/>
      <div class="content">
        <div class="sidebar">
          <app-searchbox />
          <app-basic/>
        </div>
        <div class="main-content">
        <app-detail/>
        </div>
      </div>                      
      <app-footer/>
    </div>
    
  </div>
</template>

<script>
import appHeader from './views/AppHeader.vue'
import appFooter from './views/AppFooter.vue'
import appSearchBox from './views/AppSearchBox.vue'
import appBasic from './views/AppBasic.vue'
import appDetail from './views/AppDetail.vue'

import { mapGetters } from 'vuex';


export default {
  components:{
    'app-header' : appHeader,
    'app-searchbox' : appSearchBox,
    'app-basic' : appBasic,
    'app-detail' : appDetail,
    'app-footer' : appFooter,
  },
  computed:{
    ...mapGetters(['getIsLoading']),
  },
  mounted() {
    this.searchAll(); // 화면이 나타남과 동시에 searchAll() 메서드를 호출
    console.log(this.getIsLoading);
  },
  methods : {
    searchAll(){
      console.log('searchAll 들어옴');
      this.$store.dispatch('getListAll')
    },
  },

}
</script>

<style>
html,body{
  margin: 0;
  height: 100%;
  width: 100%;
}

#app{
  height: 100%;
  position: relative;
}

.loading{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 99;
  text-align: center;
}

.loading>.loadBox{
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} 


.content{
  display: flex;
  height: 100%; 
}


.sidebar{
  flex: 0 0 25rem; 
  border-right:1rem black double;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1; 
}


</style>
