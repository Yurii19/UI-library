<template>
  <div class="main-container">
    <section class="section">
      <main>
        <h1 class="home-title">Simple vuejs ui library</h1>
        <p class="has-line-data" data-line-start="0" data-line-end="1">
          A simple vue js library containing the main components of the user interface -
          <em>buttons</em>,
          <em>grid</em>,
          <em>slider</em>,
          <em>modal window</em>,
          <em>navbar</em> and
          <em>data table</em> .
        </p>
        <img  height="400px"   src="../assets/uilogo.png" alt="site logo" 
        style="border-radius:8px; opacity: 0.8">
      </main>
    </section>
  </div>
</template>

<script>
import Vuex from 'vuex';
export default {
  name: 'Home',
};
</script>
<style scoped lang="less" >
@import "../styles/main.less";

.contacts {
  text-align: left;
}

i {
  margin: 5px 10px 5px 0px;
}
.main-container {
  justify-content: center;
  display: flex;
}
.section {
  color: #485460;
}

.home-title {
  font-size: 2.8em;
}
p {
  text-align: left;
}
</style>
