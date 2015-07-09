'use strict';

describe( "#boostrap", function() {
  it("should handle a click on the a tag by delegating to a handleClick function on your view", function() {
    var spy = spyOn(MainView.prototype, "handleClick")
    bootstrap();
    expect($("body")).toContainHtml('<a href="/whatever">to the internet</a>');
    $("a").click()
    expect(spy).toHaveBeenCalled();
  });    
});
