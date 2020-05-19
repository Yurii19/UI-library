<template>
  <div class="main-container">
    <h1>Here is button examples</h1>
    <div class="container">
      <MyButton :color="'bg-err'">
        <template>close</template>
      </MyButton>
      <MyButton :color="'btn'">
        <template>button by slot</template>
      </MyButton>
      <MyButton :color="'bg-dark'">
        <template>x</template>
      </MyButton>
    </div>
    <br />
    <div class="container">
      <MyButton :color="'bg-err'" :size="'btn-small'">
        <template>close</template>
      </MyButton>
      <MyButton :color="'btn'" :size="'btn-big'">
        <template>button by slot</template>
      </MyButton>
      <MyButton :color="'bg-dark'" :size="'btn-big'">
        <template>x</template>
      </MyButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyButton from '@/components/MyButton.vue';

export default Vue.extend({
  name: 'ButtonView',
  components: {
    MyButton,
  },
});
</script>

<style scoped lang="less">
@import "../styles/main.less";

.container {
  display: flex;
  border-top: 1px dotted black;
  height: 100px;
  justify-content: space-around;
  align-items: center;
}
</style>
