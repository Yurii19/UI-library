<template>
<button v-bind:class="[color, size]"
    @click="sendClick()"
    >
   <slot>Press</slot>
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
      this.$emit('click');
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


@err: rgba(252, 0, 0, 1);
@suc: rgba(0, 252, 105, 1);
@warn: rgba(252, 185, 0, 1);
@inf: rgba(86, 83, 245, 1);
@dark: rgba(34, 32, 32, 1);
@light: rgba(255, 249, 249, 1);

.is-active {
  transition: .1s;
  box-shadow:inset 0 0 5px 8px rgba(255, 253, 253, .6) ;
}

.bg-error {
   .btn;
  background-color: @err;
  color: @light;
  &:active {
    .is-active;
  }
}
.bg-success {
  .btn;
  background-color: @suc;
  color: @light;
  &:active {
   .is-active;
  }
}
.bg-warning {
  .btn;
  color: @light;
  background-color: @warn;
  &:active {
   .is-active;
  }
}
.bg-info {
  .btn;
  color: @light;
  background-color: @inf;

  &:active {
    .is-active;
  }
}
.bg-dark {
  .btn;
  color: @light !important;
  background-color: @dark;
  &:active {
    .is-active;
    
  }
}

.btn-big {
  height: 45px !important;
  font-size: 1.1em !important;
}
.btn-small {
  height: 20px !important;
  font-size: 0.8em !important;
  margin: 1px;
}
.btn {
  .btn-tpl(rgba(104, 103, 103, 0.4));
  user-select: none;
  height: 35px;
  padding: 0 15px 0 15px;
  border-radius: 7px;
  // outline: none;
  // outline:  solid;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
  border-style: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  background-color: rgba(149, 175, 192, 0.6);
  box-shadow: 0 0 3px 0px #818181; 
}

.rounded {
  border-radius: 50%;
}
.btn-tpl(@color) {
  &:active {
    .is-active;
  }
}
</style>
