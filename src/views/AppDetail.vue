<template>
  <div v-if="this.getSearchNum == ''">
    <div class="img_Box" >
      <div class="singleImg" v-for="(getOne, index) in this.getAll" :key="index" >
          <img class="front_default" :src="[getOne.sprites.other.dream_world.front_default]">
          <br>
          {{ index }}
      </div> 
    </div>
  </div>
  <div v-if="this.getSearchNum != ''">
    <div class="img_Box">
      <div class="singleImg">
        <img class="dream_world" :src="[this.getAll[getSearchNum].sprites.other.dream_world.front_default]">
      </div>
      <div class="singleImg">
        <img class="front_default" :src="[this.getAll[getSearchNum].sprites.front_shiny]">
      </div>
      <div class="singleImg">
        <img class="front_default" :src="[this.getAll[getSearchNum].sprites.back_shiny]">
      </div>

    </div>
    <div class="infoBox">
      무게: {{ toFixed(this.getAll[this.getSearchNum].weight / 10) }} kg <br>
      키: 0.{{ this.getAll[this.getSearchNum].height }} m <br>
      {{ this.getAll[this.getSearchNum].types[0].type.name }}
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
   
  },
  computed: {
    ...mapGetters(['getSearchNum', 'getAll','getTypes']),
  },
}
</script>

<style scoped>
div {
  /* border: 1px solid plum; */
  width: 100%;
}

.img_Box {
  display: flex;
  flex-wrap:wrap; 
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