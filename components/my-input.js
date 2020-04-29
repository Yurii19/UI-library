Vue.component('my-input', {
    props: { type: String, title: String, placeholder: String, required: Boolean },
    data: function () {
      return {
        userMessage: '',
        nonFocused: false
      }
    },
    methods: {
      inpVal: function () {
        this.nonFocused = true;
      }
    },
    template: `
    <div>
      <span>{{title}}
      <span v-if="required">*</span>
      </span>
      <input 
        v-bind:class = "{ nonValid: userMessage == '' && required && nonFocused }"
        @blur="inpVal" 
        v-model="userMessage" 
        :type="type" 
        :placeholder="placeholder" 
        :required="required">
    </div>
    `
  })
  