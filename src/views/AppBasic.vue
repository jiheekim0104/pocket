<template>

    <div v-if="this.getSearchNum==''" class="nothing">
    <!-- {{ this.getTypes }} -->
    <div class="typeBtn" v-for="type in this.getTypes" :key="type" 
    v-on:click="search(type.name)" :style="{backgroundColor: type.color}">
      {{ type.name }}
    </div> 
    </div>
    <div v-if="this.getSearchNum!=''" class="basic" >
      <img class="front_default" :src="[this.getAll[this.getSearchNum-1].sprites.other.home.front_default]"><br>
      <div class="infoBox">
        <div class="name">번호</div>
        <span>{{ this.getAll[this.getSearchNum-1].id }}</span>
      </div>
      <div class="infoBox">
        <div class="name">이름</div>
        <span>{{ this.getAll[this.getSearchNum-1].name }}</span>
      </div>
    </div>

  

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  //저장소에있는 입력 값 받아오기
  computed:{
    ...mapGetters(['getSearchNum','getAll','getTypes']),
  },
  mounted() {
    this.searchAll(); // 화면이 나타남과 동시에 searchAll() 메서드를 호출
  },
  methods : {
    searchAll(){
      console.log('searchAll 들어옴');
      this.$store.dispatch('getListAll')
    },
    search(typeName){
      // 속성 클릭
        console.log('type search 들어옴');
        console.log(typeName); 
        this.$store.commit('getTypeMember',typeName)
      }
  },
}


</script>

<style scoped>
.nothing{
width: 20rem;
margin: 1.5rem auto 0 auto;
}
.typeBtn{
  background-color: rgb(51,104,176);
  height: 1.4rem;
  width: 4rem;
  margin: 0;
  float: left;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: bolder;
  text-align: center;
  color: white;
  margin: 1rem 0.5rem 0 0.4rem;
  padding-top: 0.1rem;
}

.basic {
  /* border: 1px solid darkorange; */
  height: 100%;
  padding: 1rem;
}

.front_default {
  height: 18rem;
  margin: 1rem;
}

.infoBox {
  font-size: 1.3rem;
  display: flex;
  margin-bottom: 1rem;
}

.name {
  background-color: rgb(51, 104, 176);
  height: 1.4rem;
  width: 3.5rem;
  margin: 0.17rem 0 0.17rem 0.45rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: bolder;
  text-align: center;
  color: white;
  padding-top: 0.1rem;
}

.infoBox>span {
  margin-left: 1rem;
}</style>