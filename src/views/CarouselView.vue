<template>
  <div class="main">
    <h1>Here is carousel examples</h1>
    <div class="container">
      <Carousel v-bind:images="carouselSlides" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Carousel from '@/components/Carousel.vue';
import { users, slides, columns, search } from '@/components/localStore.ts';

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
.container {
  display: flex;
  border: 1px dotted black;
  min-height: 100px;
  justify-content: space-around;
  align-items: center;
}
</style>
