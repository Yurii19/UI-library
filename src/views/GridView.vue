<template>
  <div class="container">
    <h1>Here is grid examples</h1>
     <Row>
      <Column :size="5">this is column with size = 5</Column>
      <Column :size="3">this is column with size = 3</Column>
      <Column :size="3">3</Column>
    </Row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Row from '@/components/grid/Row.vue';
import Column from '@/components/grid/Column.vue';

export default Vue.extend({
  name: 'GridView',
  components: {
    Row,
    Column,
  },
});
</script>

<style scoped lang="less">
.container {
 margin: 0;
 border: 1px dotted black;
  height: 100px;
  padding-top: 20px;
  padding-bottom: 30px;
//   justify-content: space-around;
//   align-items: center;
}
</style>
