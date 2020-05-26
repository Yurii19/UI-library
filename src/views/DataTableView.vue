<template>
  <div class="main-container">
    <h1>{{pageTitle}}</h1>
     <section class="section">
      <span>
<p class="has-line-data" data-line-start="0" data-line-end="1">Element <code>&lt;DataTable /&gt;</code> is designed to display tabular data, supports sorting and filtering</p>
      </span>
    <div class="container">
      <DataTable :items="usersSet"
       :columns="columnsConfig"
       :search="searchConfig"
       :tableName="'Users'"
        />
    </div>

    <div class="description">
        <div class="code-sheet">
          <pre><code>&lt;div class=&quot;table-container&quot;&gt;
   &lt;DataTable :items=&quot;props&quot;
   :columns=&quot;configProps&quot;
   :search=&quot;{}&quot;
   :tableName=&quot;'Props'&quot;
    /&gt;
&lt;/div&gt;</code></pre>
          </div>
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
import DataTable from '@/components/DataTable.vue';
import { users, columns, search } from '../components/localStore';

export default Vue.extend({
  name: 'DataTableVue',
  components: {
    DataTable,
  },
  data() {
    return {
      usersSet: users,
      columnsConfig: columns,
      searchConfig: search,
      pageTitle: `<DataTable />`,
       configProps: [
        { title: 'Prop', value: 'props' },
        { title: 'Type', value: 'type' },
         {title: 'Default', value: 'default'},
        {title: 'Required', value: 'required'},
        { title: 'Description', value: 'description' },
      ],
      props: [
        {
          props: 'items',
          type: 'Object[]',
          default: 'none',
          required: 'true',
          description: 'Items is the table data in array format, where each record (row) data are keyed objects.',
           },
           {
          props: 'columns',
          type: 'Object[]',
          default: 'none',
          required: 'true',
          description: 'The columns prop is used to customize the table columns headings, and in which order the columns of data are displayed.',
           },
           {
          props: 'search',
          type: 'Object',
          default: 'none',
          required: 'false',
          description: 'Property is used to display objects from an array of items that meet certain criteria.',
           },
           {
          props: 'tableName',
          type: 'String',
          default: 'none',
          required: 'false',
          description: 'The property specifies the table header.',
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
  padding-bottom: 20px;
}
</style>
