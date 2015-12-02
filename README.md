# Intro to Backbone Events

## Overview
* About
* Instructions
* Example
* Events
* Resources

## About
One of the jobs of Backbone views is to respond to events or user interaction. Each view is responsible for a section of the user interface, and any user interaction that happens in that section should be handled by the view. Its job is to listen for events and then call a function to update the model with any changes. Backbone works seamlesly with jQuery to add and remove listeners to the section of the DOM that it manages. The listeners are actually attached to the `el` property of the view, or the root element of the view. 

In this lab you will build a view that can respond to a click event and add that view to the DOM.  
## Instructions
1. Create a view object in `views/main.js`
	* You will do this the same way you did in [backbone-basic-views](https://github.com/learn-co-curriculum/backbone-basic-views#example).  
	* In addition to initialize and render the view should also have an events hash which calls `#handleClick` on `click`.
	* Look at the below example and read the Events section below to see how the events hash should be structured. 
2. In `app.js` you should instantiate your view object and append the HTML string to the DOM.

## Example
The events property of the view object looks like this:

```javascript
MyView = Backbone.View.extend({
  events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
   }
  open : function() {
    console.log('open!');
  },
  openEditDialog : function(e) {
    // Backbone will pass us the jQuery event object
    console.log('Opening Edit Dialog!');
  }
})
``` 

###Events

1. Each key in the events hash mirrors the event type it listens for like `click`, `submit`, `mouseenter`, followed by a space and then a css selector to scope where exactly the event listener should be listening within all the HTML managed by the view.
2. The value is a string that is the name of a function defined on the view.

In this lab you are going to add some HTML to the page using a Backbone view.  We're going to add a clickable element ("a link"), and we're going to stop the default behavior of the link and then simply write to the console.

## Resources
* [Delegating Events in Backbone](http://backbonejs.org/#View-delegateEvents)
<a href='https://learn.co/lessons/backbone-views-events' data-visibility='hidden'>View this lesson on Learn.co</a>
