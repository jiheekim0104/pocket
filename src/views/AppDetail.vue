<template>
  <div class="detail" v-if="this.getSearchNum == ''&&this.getFindTypes.length==0">
    <div class="img_Box">
      <div class="singleImg" v-for="(getOne, index) in this.getAll" :key="index" >
          <img class="front_default" :src="[getOne.sprites.other.dream_world.front_default]" v-on:click="search(getOne.id)">
          <br>
          {{ getOne.id }}
      </div> 
    </div>
  </div>
  
  <div v-else-if="this.getSearchNum != ''">
    <div class="img_Box">
      <div class="singleImg">
        <img class="dream_world" :src="[this.getAll[getSearchNum-1].sprites.other.dream_world.front_default]">
      </div>
      <div class="singleImg">
        <img class="front_default" :src="[this.getAll[getSearchNum-1].sprites.front_shiny]">
      </div>
      <div class="singleImg">
        <img class="front_default" :src="[this.getAll[getSearchNum-1].sprites.back_shiny]">
      </div>
    </div>
    <div class="infoBox">
      무게: {{ toFixed(this.getAll[this.getSearchNum-1].weight / 10) }} kg <br>
      키: 0.{{ this.getAll[this.getSearchNum-1].height }} m <br>
      {{ this.getAll[this.getSearchNum-1].types[0].type.name }}
    </div>
  </div>

  <div v-else-if="this.getFindTypes.length!=0">
    <div class="img_Box" >
      <div class="singleImg" v-for="(getOne, index) in this.getFindTypes" :key="index" >
        <img class="front_default" :src="[getOne.sprites.other.dream_world.front_default]" v-on:click="search(getOne.id)">
        <br>
        {{ getOne.id }}
      </div> 
    </div>
  </div>

</template>


<script>
import { mapGetters} from 'vuex';

export default {
  methods: {
    toFixed: function (value) {
      return `${value.toFixed(1)}`
    },
    search: function(value){
      console.log('search',value);
      this.$store.commit('getInputValue',value)
    }
  },
  computed: {
    ...mapGetters(['getSearchNum', 'getAll','getTypes','getFindTypes']),
  },
}
</script>

<style scoped>
.detail {
  width: 100%;
  /* background-image: url(../assets/Natural_Green_Berry_Tree.png); */
  background-attachment: fixed;
  background-size: cover;

}

.img_Box {
  display: flex;
  flex-wrap:wrap; 
}

.img_Box>img{
  display: flex;
  z-index: 0;
  opacity: 0.5;
}
.index0{
  display: none;
}

.singleImg {
  flex: 1;
  height: 15rem;
  padding-left: 5rem;
  padding-right: 5rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  text-align: center;
}

.singleImg>.dream_world {
  height: 11rem;
  margin-top: 2rem;
}

.singleImg>.front_default {
  height: 15rem;
}

.infoBox {
  margin: 2rem;
  width: 50rem;
}

.front_default {
  height: 15rem;
}
</style>