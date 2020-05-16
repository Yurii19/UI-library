Vue.component('my-input', {
  props: { type: String, title: String, placeholder: String, required: Boolean, pattern: String, errormessage: String, value:String },
  data: function () {
    return {
    // userMessage: this.value,
      nonValid: false
    }
  },

  methods: {
    checkInputedValue: function(inputedValue) {
      const regExp = new RegExp(this.pattern);
      let res = regExp.exec(inputedValue);
      if (!res || inputedValue === '') {
        this.nonValid = true;
      } else {
        this.nonValid = false;
      }
    },
    passValue: function (val) {
      this.nonValid = false;
      this.$emit('input', val );
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
          @blur="checkInputedValue($event.target.value)" 
          @input="passValue($event.target.value)"
          v-model=userMessage
          :type="type" 
          :placeholder="placeholder" 
          :required="required"
          >
        </label>
    </div>
    `
})
