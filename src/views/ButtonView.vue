<template>
  <div class="main-container">
    <h1>{{pageTitle}}</h1>
    <section class="section">
      
      <span>
        <h1 class="code-line" data-line-start="1" data-line-end="2">
          <a id="Cololors_1"></a>Cololors
        </h1>
        <p class="has-line-data" data-line-start="2" data-line-end="3">
          There are available six types of button colors, which sets by passing property
          <strong>
            <code>color</code>
          </strong>:
          <code>bg-error</code> - red,
          <code>bg-success</code> - green,
          <code>bg-warning</code> - yellow,
          <code>bg-info</code> - blue,
          <code>bg-dark</code> - black,
          <code>btn</code> - default, grey
        </p>
      </span>
      <div class="container">
        <MyButton :color="'bg-error'">
          <template>error</template>
        </MyButton>
        <MyButton :color="'bg-success'">
          <template>success</template>
        </MyButton>
        <MyButton :color="'bg-warning'">
          <template>warning</template>
        </MyButton>
        <MyButton :color="'bg-info'">
          <template>info</template>
        </MyButton>
        <MyButton :color="'bg-dark'">
          <template>dark</template>
        </MyButton>
        <MyButton :color="'btn'">
          <template>default</template>
        </MyButton>
      </div>
      <br />
      <div class="description">
        <div class="code-sheet">
          <pre><code>&lt;div class=&quot;container&quot;&gt;
  &lt;MyButton :color=&quot;'bg-error'&quot;&gt;&lt;template&gt;error&lt;/template&gt;&lt;/MyButton&gt;
  &lt;MyButton :color=&quot;'bg-success'&quot; &gt;&lt;template&gt;success&lt;/template&gt;&lt;/MyButton&gt;
  &lt;MyButton :color=&quot;'bg-warning'&quot; &gt;&lt;template&gt;warning&lt;/template&gt;&lt;/MyButton&gt;
  &lt;MyButton :color=&quot;'bg-info'&quot; &gt;&lt;template&gt;info&lt;/template&gt;&lt;/MyButton&gt;
  &lt;MyButton :color=&quot;'bg-dark'&quot; &gt;&lt;template&gt;dark&lt;/template&gt;&lt;/MyButton&gt;
  &lt;MyButton :color=&quot;'btn'&quot;&gt;&lt;template&gt;default&lt;/template&gt;&lt;/MyButton&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </section>

    <section class="section">
      <span>
        <h1 class="code-line" data-line-start="1" data-line-end="2">
          <a id="Sizing_1"></a>Sizing
        </h1>
        <p class="has-line-data" data-line-start="2" data-line-end="3">
          There are available tree types of button size, which sets by passing property
          <strong>
            <code>size</code>
          </strong>:
          <code>btn-small</code> - height of button 25px,
          <code>btn-big</code> - hight of button 45px, and missing value means default button height - 35px.
        </p>
      </span>
      <div class="container">
        <MyButton :color="'bg-error'" :size="'btn-small'">
          <template>close</template>
        </MyButton>
        <MyButton :color="'bg-error'">
          <template>close</template>
        </MyButton>
        <MyButton :color="'bg-error'" :size="'btn-big'">
          <template>close</template>
        </MyButton>
      </div>
      <div class="description">
        <div class="code-sheet">
          <pre><code>&lt;div class=&quot;container&quot;&gt;
  &lt;MyButton :color=&quot;'bg-error'&quot; :size=&quot;'btn-small'&quot;&gt;&lt;template&gt;close&lt;/template&gt;&lt;/MyButton&gt;
  &lt;MyButton :color=&quot;'bg-error'&quot;&gt;&lt;template&gt;close&lt;/template&gt;&lt;/MyButton&gt;
  &lt;MyButton :color=&quot;'bg-error'&quot; :size=&quot;'btn-big'&quot;&gt;&lt;template&gt;close&lt;/template&gt;&lt;/MyButton&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
      <div class="table-container">
       <DataTable :items="events"
       :columns="configEvents"
       :search="null"
       :tableName="'Events'"
        />
      </div>
      <hr>
      <div class="table-container">
       <DataTable :items="props"
       :columns="configProps"
       :search="null"
       :tableName="'Props'"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyButton from '@/components/MyButton.vue';
import DataTable from '@/components/DataTable.vue';

export default Vue.extend({
  name: 'ButtonView',
  components: {
    MyButton,
    DataTable,
  },
  data() {
    return {
      pageTitle: `<MyButton />`,
      configEvents: [
        { title: 'Event', value: 'event' },
        { title: 'Argument', value: 'argument' },
        { title: 'Description', value: 'description' },
      ],
      events: [
        {
          event: 'buttonClicked',
          argument: 'Native click event object',
          description: 'Emitted when non-disabled button clicked',
           },
      ],
      configProps: [
        { title: 'Prop', value: 'props' },
        { title: 'Type', value: 'type' },
        {title: 'Default', value: 'default'},
        {title: 'Required', value: 'required'},
        { title: 'Description', value: 'description'},
      ],
      props: [
        {
          props: 'clolor',
          type: 'String',
          default: 'none',
          required: 'true',
          description: 'Applies one of the color variants to the component',
           },
           {
          props: 'size',
          type: 'String',
          default: '35px height',
          required: 'false',
          description: 'Applies one of the size variants to the component',
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
