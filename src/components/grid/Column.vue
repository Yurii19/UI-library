<template>
  <div class="row_column" v-bind:style="{ 'grid-column-end': 'span '+ size }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Column',
  props: {
    size: Number,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.row_column {
  box-shadow: inset 0 0 9px 3px rgb(0, 92, 187);
  background-color: rgba(128, 255, 0, 0.425);
  padding: 3px 0 3px 0;
  display: flex;
  align-items: center;
  border-radius: 10px;
}
</style>
