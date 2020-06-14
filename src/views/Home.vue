<template>
 <div class="main-container">
    <div class="scene">
      <main>
        <h2>Simple vuejs ui library</h2>
        <p class="has-line-data" data-line-start="0" data-line-end="1">
          A simple vue js library containing the main components of the user interface -
          <em>buttons</em>,
          <em>grid</em>,
          <em>slider</em>,
          <em>modal window</em>,
          <em>navbar</em> and
          <em>data table</em> .
        </p>
      </main>

      <div class="contacts">

        <span>this is -> {{counterValue}}</span>
        <button @click="incrCounter">++</button>
        <br />
        <a href="https://github.com/Yurii19/UI-library" target="blank">
          <i class="fab fa-github"></i>GitHub
        </a>
        <br />
        <a href="https://yurii19.github.io/" target="blank">
          <i class="fas fa-user-cog"></i>Author
        </a>
      </div>
      
    </div>
  </div>
</template>

<script>

// import Store from 
import Vuex from 'vuex';
export default {
  name: "Home",
 methods:{
   incrCounter: function(){
     this.$store.commit('increment');
   }
 }
 ,
  computed: {
    counterValue() {
      return this.$store.state.counter;
    }
  }
};
</script>
<style scoped lang="less" >
.contacts {
  text-align: left;
}
.contacts * {
  color: white;
  font-size: 1.2em;
}
i {

  margin: 5px 10px 5px 0px;
}
.main-container {
  height: 85vh;
  justify-content: center;
  display: flex;
}
.scene {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  width: 70%;
  background-color: #4a69bd;
  opacity: 0.8;
  margin: 0 auto;
  animation-duration: 2s;
  overflow: hidden;
  color: white;
}
h2 {
  color: white;
}
p {
  text-align: left;
}
</style>
