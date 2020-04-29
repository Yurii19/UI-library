Vue.component('my-input', {
    props: { type: String, title: String, placeholder: String, required: Boolean },
    data: function () {
      return {
        userMessage: '',
      }
    },
    template: `
    <div>
      <span>{{title}}
      <span v-if="required">*</span>
      </span>
      <input 
        v-model="userMessage" 
        :type="type" 
        :placeholder="placeholder" 
        :required="required">
    </div>
    `
  })
  