<template>
  <div class="main">
    <nav class="nav">
      <div class="logo">
        <slot name="brand"></slot>
        <div @click="changeButton()" class="burger">
          <i v-if="!isOpen" id="showmenu" class="mfa fas fa-bars"></i>
          <i v-if="isOpen" id="closemenu" class="mfa fas fa-times"></i>
        </div>
      </div>

      <div v-bind:class="['nav-menu', {'hide': !isOpen}]" @click="closeMenu">
        <slot name="menu"></slot>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  props: {},
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    changeButton() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.nav-menu {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

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
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 1);
  display: inline-flex;
}

.burger {
  display: none;
}

@media (max-width: 600px) {
  .nav-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    margin: 0 auto;
    transition: .5s;
  }
  .hide {
    display: none !important;
  }
  .nav {
    margin: auto;
    width: 90%;
    flex-wrap: wrap;
    padding: 15px;
    background-color: black;
    color: white;
  }
  .logo {
    font-size: 1em;
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
  }
  .burger {
    display: inline;
  }
  .mfa {
    text-align: center;
    width: 15px;
    cursor: pointer;
  }
}
</style>
