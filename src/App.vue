<template>
  <div id="app">
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
  height: 100vh;
}
#app{
  height: 100%;
}
.content{
  display: flex;
  height: 92%;
}
.sidebar{
  width: 30rem;
  border-right:1rem black double;
  height: 200vh;
  display: flex;
  flex-direction: column;
}

</style>
