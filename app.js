var one = new Vue({
  el: '#vue-app-one',

  data: {
    title: 'View App One'
  },

  methods: {

  },

  computed: {
    greet: function () {
      return 'Hello from app one';
    }
  }

});

var two = new Vue({
  el: '#vue-app-two',

  data: {
    title: 'View App Two'
  },

  methods: {
    changeTitle: function () {
      one.title = "Title changed";
    }
  },

  computed: {
    greet: function () {
      return 'Hello from app two';
    }
  }

});

two.title = "Changed from outside the code block";

