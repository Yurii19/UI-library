<template>
  <div class="main">
    <h1>Here is modal examples</h1>
    <div class="container">
       <Modal :title="'Hello im my modal'">
          <template #default>here is modal text</template>
           <template #accept><MyButton :color="'bg-suc'" :size="'btn-small'" ><template>OK</template></MyButton></template>
          <template #trigger>
            show modal ->
            <MyButton :color="'bg-info'" />
          </template>
        </Modal>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyButton from '@/components/MyButton.vue';
import Modal from '@/components/Modal.vue';

export default Vue.extend({
  name: 'ModalView',
  components: {
    MyButton,
    Modal,
  },
});
</script>

<style scoped lang="less">
.container {
  display: flex;
  border: 1px dotted black;
  height: 100px;
  justify-content: space-around;
  align-items: center;
}
</style>
