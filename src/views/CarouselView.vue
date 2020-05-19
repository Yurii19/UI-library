<template>
  <div class="main-container">
    <h1>Here is carousel examples</h1>
    <div class="container">
      <Carousel v-bind:images="carouselSlides" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Carousel from '@/components/Carousel.vue';
import { users, slides, columns, search } from '../components/localStore';

export default Vue.extend({
  name: 'ButtonView',
  components: {
    Carousel,
  },
  data() {
    return {
      carouselSlides: slides,
    };
  },
});
</script>

<style scoped lang="less">
@import "../styles/main.less";

.container {
  display: flex;
  border-top: 1px dotted black;
  min-height: 100px;
  justify-content: space-around;
  align-items: center;
}
</style>
