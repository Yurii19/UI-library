
var app = new Vue({
  el: '#app',
  data: {
    questions: [
      { title: "Как тебя зовут?", placeholder: "Иван" },
      { title: "Сколько тебе лет?", placeholder: "15", type: "number" },
      { title: "Твой email", placeholder: "ivan@example.com", required: true }
    ]
  },
  methods: {
    handleInputedValue: function (data) {
      for (const key in data) {console.log(data[key]) }
    }
  }
}) 