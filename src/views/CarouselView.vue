<template>
  <div class="main-container">
    <h1>{{pageTitle}}</h1>
    <section class="section">
      <span>
       <p class="has-line-data" data-line-start="0" data-line-end="1"><code>&lt;Carousel/&gt;</code> - an element that allows you to view images by flipping. Accepts the images: property - an array of images addresses.</p>
      </span>
      <div class="container">
        <Carousel
          v-bind:images="[
            'https://loremflickr.com/320/240',
            'https://loremflickr.com/320/240/brazil,rio',
            'https://loremflickr.com/g/320/240/paris,girl/all',
          ]"
        />
      </div>
      <div class="description">
        <div class="code-sheet">
          <pre><code>&lt;div&gt;
    &lt;Carousel
      v-bind:images=&quot;[
        'https://loremflickr.com/320/240',
        'https://loremflickr.com/320/240/brazil,rio',
        'https://loremflickr.com/g/320/240/paris,girl/all',
      ]&quot;
    /&gt;
  &lt;/div&gt;</code></pre>
        </div>
      </div>
       <div class="table-container">
       <DataTable :items="props"
       :columns="configProps"
       :search="null"
       :tableName="'Carousel Props'"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Carousel from '@/components/Carousel.vue';
import { users, slides, columns, search } from '../components/localStore';
import DataTable from '@/components/DataTable.vue';

export default Vue.extend({
  name: 'CarouselView',
  components: {
    Carousel,
    DataTable,
  },
  data() {
    return {
      carouselSlides: slides,
      pageTitle: `<Carousel />`,
      configProps: [
        { title: 'Props', value: 'props' },
        { title: 'Type', value: 'type' },
        {title: 'Default', value: 'default'},
        {title: 'Required', value: 'required'},
        { title: 'Description', value: 'description' },
      ],
      props: [
        {
          props: 'images',
          type: 'Array',
          default: 'none',
          required: 'true',
          description: 'Applies an array of image addresses.',
           },
      ],
    };
  },
});
</script>

<style scoped lang="less">
@import "../styles/main.less";

.container {
  display: flex;
  min-height: 100px;
  justify-content: space-around;
  align-items: center;
}
</style>
