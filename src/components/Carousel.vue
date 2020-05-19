<template>
  <div class="carousel" v-bind:style="{ width: carouselSize+'px' }">
    <div class="slides" v-bind:style="{ 'margin-left': disposition+'px' }">
      <img v-for="img in images" :key="img" :src="img" :width="carouselSize" alt />
    </div>
    <i
      class="my-control fas fa-arrow-circle-left"
      v-if="currentSlide != 0"
      @click="currentSlide--"
    ></i>
    <i
      class="my-control fas fa-arrow-circle-right button-right"
      v-if="currentSlide != images.length-1"
      @click="currentSlide++;"
    ></i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Carousel',
  props: {
    images: Array,
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {},
  computed: {
    carouselSize() {
      const screenWidth = document.documentElement.clientWidth;
      return screenWidth < 500 ? 300 : 400;
    },
    disposition(): number {
      return -this.currentSlide * this.carouselSize;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.slides {
  transition: 1s;
  display: flex;
}

.carousel-desktop {
  width: 400px;
}

.carousel-mobile {
  width: 300px;
}

.carousel {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border: 6px double grey;
  margin: 20px;
}
.button-right {
  margin-left: auto;
  margin-right: 0;
}

.my-control {
  transition: 1s;
  margin-top: -50px;
  font-size: 3em;
  color: rgba(78, 0, 151, 0.6);
  cursor: pointer;
  &:hover {
    transition: 0.6s;
    color: rgba(255, 255, 0, 0.6);
  }
}

.button-hide {
  visibility: hidden;
}
</style>
