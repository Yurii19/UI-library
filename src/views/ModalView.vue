<template>
  <div class="main-container">
    <h1>{{pageTitle}}</h1>
    <section class="section">
      <span>
        <p class="has-line-data" data-line-start="1" data-line-end="2">
          The
          <code>&lt;Modal/&gt;</code> - is an element of the modal window that having
          <strong>3 slots</strong> -
          <code>#default</code>,
          <code>#accept</code> and
          <code>#trigger</code>.
          <code>#default</code>- for the message text of the modal window,
          <code>#accept</code> - for the consent button and
          <code>#trigger</code> - for the trigger element - which is responsible for the appearance of the modal window, also the modal element can accept the props
          <code>title</code> - to set the text of the header of the modal window.
        </p>
      </span>
      <div class="container">
      <Modal :title="'Hello im my modal'">
        <template #default>here is modal text</template>
        <template #accept>
          <MyButton :color="'bg-success'" :size="'btn-small'">
            <template>OK</template>
          </MyButton>
        </template>
        <template #trigger>
          <MyButton :color="'bg-info'" />
        </template>
      </Modal>
      </div>
      <div class="code-sheet">
        <pre><code>&lt;Modal :title=&quot;'Hello im my modal'&quot;&gt;
    &lt;template #default&gt;here is modal text&lt;/template&gt;
    &lt;template #accept&gt;
      &lt;MyButton :color=&quot;'bg-success'&quot; :size=&quot;'btn-small'&quot;&gt;
        &lt;template&gt;OK&lt;/template&gt;
      &lt;/MyButton&gt;
    &lt;/template&gt;
    &lt;template #trigger&gt;
      &lt;MyButton :color=&quot;'bg-info'&quot; /&gt;
    &lt;/template&gt;
  &lt;/Modal&gt;</code></pre>
      </div>
      <div class="table-container">
       <DataTable :items="props"
       :columns="configProps"
       :search="{}"
       :tableName="'Props'"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyButton from '@/components/MyButton.vue';
import Modal from '@/components/Modal.vue';
import DataTable from '@/components/DataTable.vue';

export default Vue.extend({
  name: 'ModalView',
  components: {
    MyButton,
    Modal,
    DataTable,
  },
  data() {
    return {
      pageTitle: `<Modal />`,
      configProps: [
        { title: 'Prop', value: 'props' },
        { title: 'Type', value: 'type' },
         {title: 'Default', value: 'default'},
        {title: 'Required', value: 'required'},
        { title: 'Description', value: 'description' },
      ],
      props: [
        {
          props: 'title',
          type: 'String',
          default: 'none',
          required: 'true',
          description: 'Applies a string, that sets the window title text.',
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
  height: 100px;
  justify-content: space-around;
  align-items: center;
}
</style>
