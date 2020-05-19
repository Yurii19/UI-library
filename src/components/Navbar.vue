<template>
  <div class="main">
    <nav class="nav">
      <div class="logo">
        <slot name="brand">
         
        </slot>
      </div>
      <slot name="menu">
      
      </slot>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {

  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: inherit;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  color: rgb(255, 255, 255);
}
.logo {
  font-size: 1.2em;
  // border-radius: 20px;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 1);
  display: inline-flex;
}
.nav-menu {
  display: flex;
}
.menu-item {
  margin-left: 25px;
}
.burger {
  display: none;
}
.removed {
  display: none !important;
}
@media (max-width: 600px) {
  body {
    display: flex;
    flex-direction: column;
  }

  .menu-item {
    margin: 0;
  }

  .hide {
    display: none !important;
  }
  .nav {
    margin: auto;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    display: inline-flex;
    background-color: black;
    color: white;
  }
  .logo {
    font-size: 1em;
    display: inline-flex;
    flex-grow: 1;
    justify-content: center;
  }
  .burger {
    display: inline;
  }
  .nav-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .mfa {
    text-align: center;
    width: 15px;
    cursor: pointer;
  }
}
</style>
