MainView = Backbone.View.extend({
  events : {
    "click" : "handleClick"
  },
  initialize : function() {
    this.render();
  },
  render : function() {
    this.$el.append('<a href="/whatever">to the internet</a>');
    return this;
  },
  handleClick : function(e) {
    e.preventDefault();
    console.log("something")
  }
})