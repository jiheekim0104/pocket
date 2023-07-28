<template>
  <div>
    <div v-if="this.getSearchNum==''" class="nothing">
    아무것도 입력하지 않았을때 
     
         {{ this.getTypes }}
     
    </div>
    <div v-if="this.getSearchNum!=''" class="basic" >
      <img class="front_default" :src="[this.getAll[this.getSearchNum].sprites.other.home.front_default]"><br>
      <div class="infoBox">
        <div class="name">번호</div>
        <span>{{ this.getAll[this.getSearchNum].id }}</span>
      </div>
      <div class="infoBox">
        <div class="name">이름</div>
        <span>{{ this.getAll[this.getSearchNum].name }}</span>
      </div>
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
  },
}


</script>

<style scoped>
.nothing{
  text-align: center;
}
.typeBtn{
  background-color: rgb(51,104,176);
  height: 1.4rem;
  width: 3.5rem;
  margin: 0.17rem 0.4rem 0.17rem auto;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: bolder;
  text-align: center;
  color: white;
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