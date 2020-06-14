<template>
  <div class>
    <div class="modal-bg" v-if="visible">
      <div class="modal" v-if="visible">
        <div class="close-slot" @click="closeModal">
          <MyButton :color="'bg-dark'" :size="'btn-small'" >
          <template>x</template>
        </MyButton>
        </div>
        <h3 class="modal-header">{{title}}</h3>
        <div class="modal-body">
          <slot>Modal default content fdfghf fdhfhfgh fdgghfghfg ryrty rtyrtyrety ertyrtyrty ertyrtyrtyr retyrety</slot>
        </div>
        <div class="modal-footer">
          <div @click="tryClose" class="button-wrap">
             <MyButton :color="'bg-success'" :size="'btn-small'">
            <template >ok</template>
          </MyButton>
          </div>
        </div>
      </div>
    </div>

    <div class="trigger-box" @click="open">
      <slot name="trigger">Def_button</slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyButton from '@/components/MyButton.vue';

export default Vue.extend({
  components: {
    MyButton,
  },
  name: 'Modal',
  props: {
    title: String,
   // visibilytyFlag: Boolean,
    // @click.prevent="closed"
  },
  data() {
    return {
      visible: false,
      pressedValue: '',
    };
  },
  methods: {
    tryClose() {
      this.visible = false;
      this.$emit('okclose');
    },
    open() {
      this.visible = true;
      this.$emit('open');
    },
    closeModal() {
      this.visible = false;
      this.$emit('close');
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@modal-lines: #7f8fa6;

.close-slot {
  //display: flex;
 // border: 1px solid red;
  text-align: right;
}

.button-wrap {
  // border: 1px solid red;
  display: inline-flex;
  // padding: 0 !important;
}
input {
 border-style: none;
 outline-color: @modal-lines;
 outline-width: 1px;
 background-color: rgba(0, 0, 0, 0.1);
  padding: 3px 0 3px 5px;
  border-radius: 5px;
}
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
  z-index: 9999;
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
  // font-size: 0.9em;
  border-bottom: 1px solid @modal-lines;
  border-top: 1px solid @modal-lines;
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
