<template>
  <div class="main">
    <h1>Here is data table examples</h1>
    <div class="container">
      <DataTable :items="usersSet" :columns="columnsConfig" :search="searchConfig"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DataTable from '@/components/DataTable.vue';
import { users, columns, search } from '@/components/localStore.ts';

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
.container {
  display: flex;
  border: 1px dotted black;
  min-height: 100px;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
}
</style>
