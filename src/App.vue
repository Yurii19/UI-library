<template>
  <div id="app">
    <div id="nav">
      <Navbar>
        <template #brand>
          <img src="https://www.dropbox.com/s/mc8fvdgpbrcdlaq/mo.png?raw=1" height="60px" />
          
        </template>
        <template #menu class="menu-wrap">
          <router-link class="rl" to="/">Home</router-link>
          <router-link class="rl" to="/button">Button</router-link>
          <router-link class="rl" to="/grid">Grid</router-link>
          <router-link class="rl" to="/modal">Modal</router-link>
          <router-link class="rl" to="/carousel">Carousel</router-link>
          <router-link class="rl" to="/dataTable">Data Table</router-link>
        </template>
      </Navbar>
    </div>
    <router-view />
    <footer class="footer">
      <!-- <div class="contacts"> -->
        <router-link class="rl" to="/">
        <img src="@/assets/uilogo.png" height="40px" alt="site logo">
        </router-link>
        <a href="https://github.com/Yurii19/UI-library/tree/vue-js" target="blank">
          <i class="fab fa-github icon-link"></i>GitHub
        </a>
        <a href="https://yurii19.github.io/" target="blank">
          <i class="fas fa-user-cog icon-link"></i>Author
        </a>
      <!-- </div> -->

    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';

export default Vue.extend({
  components: {
    Navbar,
  },
});
</script>

<style lang="less">

body {
  background-image: url('https://www.dropbox.com/s/mtx7xxxjsuyyzuq/mainbg.jpg?raw=1');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed ;
  margin: 0;
  // padding-top: 80px;  
  min-height: 100vh;
  // border: 1px solid red;
  //  display: flex;
  // flex-direction: column;
  // justify-content: space-between;
}
.rl {
  display: flex;
  align-items: center;
}

.footer {
  display: flex;
  // flex: 0 1 auto;
  justify-content: space-around;
  align-items: center;
  background-color: #4a69bd;
  opacity: .8;
  padding: 0px 10px 0px 10px;
    margin-bottom: auto 0;
  flex-wrap: wrap;
  // width: 100%;
}
.contacts {
  // border: 1px solid blue;
}
.footer * {
  color: white;
}
.icon-link {
  margin-right: 4px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 10%;
  //   display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // align-items: center;
  // min-height: 100vh;
  // width: 100%;
  // border: 1px solid red;
}

#nav {
  a {
    font-weight: bold;
    color: white;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      color: #54a0ff;
    }

    &.router-link-exact-active {
      color: #55efc4;
    }
  }
}
@media (max-width: 600px) {
 .rl{
  font-weight: 100 !important;
  font-size: 0.8em;
  padding: 3px 3px 3px 0;

 } 
}
</style>
