Vue.component('my-input', {
  props: { type: String, title: String, placeholder: String, required: Boolean, pattern: String, errormessage: String },
  data: function () {
    return {
      userMessage: '',
      nonValid: false
    }
  },
  methods: {
    inpVal: function () {
      const regExp = new RegExp(this.pattern);
      let res = regExp.exec(this.userMessage);
      if (!res || this.userMessage === '') {
        this.nonValid = true;
      } else {
        this.nonValid = false;
      }
    },
    passValue: function () {
      this.$emit('inputvalue', { fieldname: this.title, fieldvalue: this.userMessage });
    }
  },
  computed: {
    errorFlag: function () {
      return this.required && this.nonValid;
    }
  },
  template: `
    <div>
      <label class="componentinput">
        <span>{{title}}
          <span v-if="required">*</span>
          <transition name="fade">
            <span class="errInpMessage"  v-if="nonValid">{{errormessage}}</span>
          </transition>
        </span>
        <input 
          v-bind:class = "{ inputError: errorFlag }"
          @blur="inpVal" 
          @input="passValue"
          v-model="userMessage" 
          :type="type" 
          :placeholder="placeholder" 
          :required="required">
        </label>
    </div>
    `
})
