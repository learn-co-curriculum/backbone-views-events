'use strict';

describe( "#boostrap", function() {
  var spy;
  it("should instantiate your view and return an object", function() {
    spy = spyOn(MainView.prototype, "handleClick");
    bootstrap();
    expect(app.mainView.el).toContainHtml("<a href='/whatever'>to the internet</a>")
  });

  it("should append the proper html string to the body", function() {
    expect($("body")).toContainHtml("<a href='/whatever'>to the internet</a>");
  });

  it("should handle a click on the a tag by delegating to a #handleClick function on your view", function() {
    $("a").click()
    expect(spy).toHaveBeenCalled();
  });  
});