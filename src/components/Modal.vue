<template>
  <div class>
    <div class="modal-bg" v-if="visibility">
      <div class="modal" v-if="visibility">
        <button
          class="cross-close modal-close button"
          @click.prevent="closed">X</button>
        <h3 class="modal-header">{{title}}</h3>
        <div class="modal-body">
          <slot>Modal default content fdfghf fdhfhfgh fdgghfghfg ryrty rtyrtyrety ertyrtyrty ertyrtyrtyr retyrety</slot>
        </div>
        <div class="modal-footer">
          <div @click.prevent="closed">
            <slot name="accept">-ok-</slot>
          </div>
        </div>
      </div>
    </div>

    <div class="trigger-box" @click.prevent="open">
      <slot name="trigger">Def_button</slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Modal',
  props: {
    title: String,
  },
  data() {
    return {
     // title: 'Send',
      visibility: false,
      pressedValue: '',
    };
  },
  methods: {
    open() {
      this.visibility = true;
      this.$emit('modalIsOpen');
    },
    closed() {
      this.visibility = false;
      this.$emit('modalIsClosed');
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.trigger-box {
  display: inline-flex;
  align-items: center;
}

.modal-bg {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal {
  padding: 10px 10px 7px 10px;
  min-height: 130px;
  width: 30%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-self: center;
  position: fixed;
}

.cross-close {
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  padding: 0;
  align-self: flex-end;
  font-family: Arial, Helvetica, sans-serif;
}

.modal-header {
  margin-top: 0;
  margin-bottom: 7px;
  text-align: center;
  font-family: Verdana, Tahoma, sans-serif;
  font-weight: 100;
}

.modal-lower-button {
  margin-top: 15px;
  margin: auto;
  margin-right: 0;
}

.modal-body {
  text-align: left;
  font-family: Verdana, Tahoma, sans-serif;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9em;
  border-bottom: 1px solid #b33771;
  border-top: 1px solid #b33771;
  padding: 7px 0 7px 0;
  margin-bottom: 7px;
}

.modal-footer {
  margin: 11px 0 0 0;
  padding: 0 5px 0 0;
  justify-content: right;
  text-align: right;
}

.button {
  border-radius: 3px;
  border-style: none;
  outline: none;
  box-shadow: 0 0 3px 1px rgba(129, 129, 129, 1);
  cursor: pointer;
  padding: 4px;
  &:active {
    box-shadow: inset 0 0 3px 1px rgba(129, 129, 129, 1);
  }
}

@media (max-width: 600px) {
  .modal {
    position: fixed;
    top: 15%;
    width: 50%;
  }
}
</style>
