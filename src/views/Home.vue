<template>
  <div class="home">
    <h1>Welcome to my project!</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <MyButton :color="'bg-err'" ><template>close</template></MyButton>
    <MyButton :color="'btn'" ><template>button by slot</template></MyButton>
    <MyButton :color="'bg-dark'" ><template>x</template></MyButton>
    <Row>
      <Column :size="5">this is column with size = 5</Column>
      <Column :size="3">this is column with size = 3</Column>
      <Column :size="3">
        <Modal :title="'Hello im my modal'">
          <template #default>here is modal text</template>
           <template #accept><MyButton :color="'bg-suc'" :size="'btn-small'" ><template>OK</template></MyButton></template>
          <template #trigger>
            show modal ->
            <MyButton :color="'bg-info'" />
          </template>
        </Modal>
      </Column>
    </Row>
    <Carousel
    v-bind:images="carouselSlides"
    />
    <DataTable :items="usersSet" :columns="columnsConfig" :search="searchConfig"/>
    <MyModal> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import MyButton from "@/components/MyButton.vue";
import Row from "@/components/grid/Row.vue";
import Column from "@/components/grid/Column.vue";
import Modal from "@/components/Modal.vue";
import Carousel from "@/components/Carousel.vue";
import DataTable from "@/components/DataTable.vue";
import { users, slides, columns, search } from "@/components/localStore.ts";
export default {
  name: "Home",
  components: {
    HelloWorld,
    MyButton,
    Row,
    Column,
    Modal,
    Carousel,
    DataTable,
  },
  data: function() {
    return {
      carouselSlides: slides,
      usersSet: users,
      columnsConfig: columns,
      searchConfig: search,
    }
  },
};
</script>
<style lang="less" >
body {
  margin: 0;
  // border: 1px solid red;
}
</style>
