<template>
  <div class>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MyButton :color="'bg-err'" />
    <Row>
      <Column :size="5">this is column with size = 5</Column>
      <Column :size="3">this is column with size = 3</Column>
      <Column :size="3">
        <Modal>
          <template #default>here is modal text</template>
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
    <!-- <MyModal> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyButton from "@/components/MyButton.vue";
import Row from "@/components/grid/Row.vue";
import Column from "@/components/grid/Column.vue";
import Modal from "@/components/Modal.vue";
import Carousel from "@/components/Carousel.vue";
import DataTable from "@/components/DataTable.vue";
import { users, slides, columns, search }  from "@/components/localStore.ts";

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
  }
};
</script>
