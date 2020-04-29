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
      },
      passValue: function() {
        this.$emit('inputvalue', {fieldname: this.title, fieldvalue: this.userMessage});
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
        @input="passValue"
        v-model="userMessage" 
        :type="type" 
        :placeholder="placeholder" 
        :required="required">
    </div>
    `
  })
  