<template>
    <button v-bind:class="color"
    @click="sendClick"
    >
    Press
    </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MyButton',
  props: {
    size: String,
    color: String,
  },
  data() {
    return {
      pressed: '',
      pressedValue: '',
    };
  },
  methods: {
    sendClick() {
      this.$emit('buttonClicked', this.pressedValue );
    },
  },
});
// console.log(name);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@err: rgba(252, 0, 0, 1);
@suc: rgba(0, 252, 105, 1);
@warn: rgba(252, 185, 0, 1);
@inf: rgba(86, 83, 245, 1);
@dark: rgba(34, 32, 32, 1);
@light: rgba(255, 249, 249, 1);

.bg-err {
  background-color: @err;
  color: @light;
  .btn;
  &:active {
    box-shadow: 0 0 0px 4px rgba(250, 0, 0, 0.3) !important;
  }
}
.bg-suc {
  background-color: @suc;
  color: @light;
  .btn;
  &:active {
    box-shadow: 0 0 0px 4px rgba(0, 252, 105, 0.4) !important;
  }
}
.bg-warn {
  .btn;
  color: @light;
  background-color: @warn;
  &:active {
    box-shadow: 0 0 0px 4px rgba(252, 185, 0, 0.4) !important;
  }
}
.bg-info {
  .btn;
  color: @light;
  background-color: @inf;
  &:active {
    box-shadow: 0 0 0px 4px rgba(86, 83, 245, 0.6) !important;
  }
}
.bg-dark {
  .btn;
  color: @light !important;
  background-color: @dark;
  &:active {
    box-shadow: 0 0 0px 4px rgba(34, 32, 32, 0.5) !important;
  }
}

.btn-big {
  height: 45px !important;
  font-size: 1.1em !important;
}
.btn-small {
  height: 25px !important;
  font-size: 0.8em !important;
}
.btn {
  .btn-tpl(rgba(104, 103, 103, 0.4));
  user-select: none;
  height: 35px;
  padding: 0 15px 0 15px;
  border-radius: 7px;
  outline: none;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
  border-style: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}
.btn-tpl(@color) {
  &:active {
    box-shadow: 0 0 0px 4px @color;
  }
}
</style>
