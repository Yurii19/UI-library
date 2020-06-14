<template>
  <div class="main-container">
    <h1>{{pageTitle}}</h1>
    <section class="section">
      <span>
        <p class="has-line-data" data-line-start="0" data-line-end="1">
          Element
          <code>&lt;DataTable /&gt;</code> is designed to display tabular data, supports sorting and filtering
        </p>
      </span>
      <div class="container" >
        <DataTable
          :items="usersArray"
          :columns="remoteConfig.columns"
          :search="searchConfig"
          :tableName="remoteTableName"
          :apiUrl="'https://5e938231c7393c0016de48e6.mockapi.io/api/ps5/users'"
        />
      </div>
      <div class="container">
        <DataTable
          :items="usersSet"
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
        <DataTable :items="props" :columns="configProps" :search="null" :tableName="'Props'" />
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
  mounted() {
   // alert(this.$store.state.tables);
   // console.log(this.$store.state.tables);
  },
  data() {
    return {
      usersSet: users,
      columnsConfig: columns,
      searchConfig: search,
      pageTitle: `<DataTable />`,

      remoteTableName: 'Remote users',

      remoteConfig: {
        apiUrl: 'https://5e938231c7393c0016de48e6.mockapi.io/api/ps5/users',
        defaultSort: { field: 'id', type: 'ascending' },
        parent: 'usersTable',
        columns: [
          {
            title: '№',
            value: '_index',
            editable: false,
            getValue() {
              return this.value;
            },
          },
          {
            title: 'Имя',
            value: 'name',
            getValue() {
              return this.value;
            },
          },
          {
            title: 'Фамилия',
            value: 'surname',
            getValue() {
              return this.value;
            },

          },
          {
            title: 'Возраст',
            value(user: any) {
              const birthYear = new Date(user.birthday).getFullYear();
              return new Date().getFullYear() - birthYear;
            },

            type: 'number',
            getValue() {
              return 'birthday';
            },
          },
          {
            title: 'Действия',
            value: 'actions',
            editable: false,
            getValue() {
              return this.value;
            },
          },
        ],
        calculateAge(birthday: string) {
          const birthYear = new Date(birthday).getFullYear();
          return new Date().getFullYear() - birthYear;
        },
        search: {
          fields: ['name', 'surname'],
          filters: [(v: string) => v.toLowerCase()],
        },
      },
      configProps: [
        { title: 'Prop', value: 'props' },
        { title: 'Type', value: 'type' },
        { title: 'Default', value: 'default' },
        { title: 'Required', value: 'required' },
        { title: 'Description', value: 'description' },
      ],
      props: [
        {
          props: 'items',
          type: 'Object[]',
          default: 'none',
          required: 'true',

          description:
            'Items is the table data in array format, where each record (row) data are keyed objects.',
        },
        {
          props: 'columns',
          type: 'Object[]',
          default: 'none',
          required: 'true',

          description:
            'The columns prop is used to customize the table columns headings, and in which order the columns of data are displayed.',
        },
        {
          props: 'search',
          type: 'Object',
          default: 'none',
          required: 'false',

          description:
            'Property is used to display objects from an array of items that meet certain criteria.',
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
  methods: {
    // loadUsers: function() {
    //   this.$store.dispatch('getUsers');
    // }
  },

  computed: {
    usersArray() {
      // alert('work');
     const tableName = this.remoteTableName as keyof object;
     return this.$store.state.tables[tableName];
    // console.log(' - ' + svar);
     // return svar;
    },
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
