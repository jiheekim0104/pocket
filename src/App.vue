<template>
  <div id="app">
    <img src="./assets/Fountain.gif">
    <app-header/>
    <div class="content">
        <div class="sidebar">
          <app-searchbox />
          <app-basic/>
        </div>
        <app-detail/>
      
    </div>
    <app-footer/>
  </div>
</template>

<script>
import appHeader from './views/AppHeader.vue'
import appFooter from './views/AppFooter.vue'
import appSearchBox from './views/AppSearchBox.vue'
import appBasic from './views/AppBasic.vue'
import appDetail from './views/AppDetail.vue'


export default {
  components:{
    'app-header' : appHeader,
    'app-searchbox' : appSearchBox,
    'app-basic' : appBasic,
    'app-detail' : appDetail,
    'app-footer' : appFooter,
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
  position: fixed;
  width: 100%;
  display: block;
  opacity: 0.8;
  background-color: white;
  z-index: 99;
  text-align: center;
  pointer-events: none;
  transition: all 1s ease-out;
}

#app>img{
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  
}


.content{
  display: flex;
  /* height: 92%; */
  height: 100%; 
}


.sidebar{
  width: 30rem;
  height: 100vh; 
  border-right:1rem black double;
  display: flex;
  flex-direction: column;
}

</style>
