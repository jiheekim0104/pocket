<template>
  <div>
    <div class="searchBox">
        <input class="inputArea" placeholder="찾으시려는 포켓몬의 번호를 입력하세요."
        v-model="searchNum"
        v-on:keyup.enter="search">
       <div class="findBtn" v-on:click="search">Search</div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex';


export default {
  data(){
    return{
      searchNum:""
    }
  },
  methods : {
    // ...mapMutations({
    //   search : 'getInputValue'
    // }),
    search(){
      //처음에 입력한 값이 없는 경우 화면 
        console.log('search 들어옴');
        console.log(this.searchNum);
        this.$store.commit('getInputValue',this.searchNum)
      }
    }  
  }

</script>

<style scoped>
div{
  /* border: 1px solid blue; */
  height: 3rem;
}
.searchBox{
  border: 2px solid rgb(255,203,5);
  height: 2rem;
  border-radius: 3rem;
  margin: 0.5rem;
  display: flex;
}
.inputArea{
  width: 15rem;
  margin-left: 1rem;
  border: none;
  outline: none;
}
.findBtn{
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
</style>