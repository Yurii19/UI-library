<template>
  <div class="main-container">
    <h1>{{pageTitle}}</h1>
    <section class="section">
      <span>
        <p class="has-line-data" data-line-start="0" data-line-end="1">There are two elements <code>&lt;Row/&gt;</code> and <code>&lt;Column/&gt;</code>, <code>&lt;Row/&gt;</code> - a wrapper that allows you to set the proportional size of the internal elements - a <code>&lt;Column/&gt;</code>. Each column element can take place in the range of <strong>1/12</strong> to <strong>12/12</strong> of the width of the row element. The row size is set through the column element size props and can take values from 1 to 12.</p>
      </span>
     <Row class="row">
      <Column :size="5">
      <div class="inner-wrap">this is column with size = 5, equals 5/12 parts of row size</div>
      </Column>
      <Column :size="3"><div class="inner-wrap">this is column with size = 3</div></Column>
      <Column :size="2"><div class="inner-wrap">this is column with size = 2</div></Column>
    </Row>
    <div class="description">
      <div class="code-sheet">
        <pre><code>&lt;Row class=&quot;row&quot;&gt;
  &lt;Column :size=&quot;5&quot;&gt;
  &lt;div class=&quot;inner-wrap&quot;&gt;this is column with size = 5, equals 5/12 parts of row size&lt;/div&gt;
  &lt;/Column&gt;
  &lt;Column :size=&quot;3&quot;&gt;
  &lt;div class=&quot;inner-wrap&quot;&gt;this is column with size = 3&lt;/div&gt;
  &lt;/Column&gt;
  &lt;Column :size=&quot;2&quot;&gt;
  &lt;div class=&quot;inner-wrap&quot;&gt;this is column with size = 2&lt;/div&gt;
  &lt;/Column&gt;
&lt;/Row&gt;</code></pre>
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
import Row from '@/components/grid/Row.vue';
import Column from '@/components/grid/Column.vue';
import DataTable from '@/components/DataTable.vue';

export default Vue.extend({
  name: 'GridView',
  components: {
    Row,
    Column,
    DataTable,
  },
  data() {
    return {
      pageTitle: ` <Row />, <Column />`,
      configProps: [
        { title: 'Props', value: 'props' },
        { title: 'Type', value: 'type' },
        {title: 'Default', value: 'default'},
        {title: 'Required', value: 'required'},
        { title: 'Description', value: 'description' },
      ],
      props: [
        {
          props: 'Size',
          type: 'Number',
          default: '1',
          required: 'false',
          description: 'Applies number, that determines which part of the parent element will be occupied by the current element.',
           },
      ],
    };
  },

});
</script>

<style scoped lang="less">
@import "../styles/main.less";

.description {
  margin-top: 10px;
}
.inner-wrap {
  text-align: left;
 padding: 5px;
 border-radius: 10px;
}
.row {
padding-top: 20px;
padding-bottom: 20px;
}

.row span {
  display: block;
  border: 1px solid red;
}
</style>
