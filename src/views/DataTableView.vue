<template>
  <div class="main-container">
    <h1>Here is data table examples</h1>
    <div class="container">
      <DataTable :items="usersSet" :columns="columnsConfig" :search="searchConfig"/>
    </div>
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
    };
  },
});
</script>

<style scoped lang="less">
@import "../styles/main.less";

.container {
  display: flex;
  border-top: 1px dotted black;
  min-height: 100px;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
}
</style>
