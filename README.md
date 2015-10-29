# Intro to Backbone Events

## Overview
* About
* Example
* Resources

## About
One of the jobs of Backbone views which we have not yet discussed is responding to events or user interactions.  Each view is responsible for a section of the user interface; any user interaction that happens in that region should be handled by that view. Its job is to listen for specified events and then call a function built to update the related model with any changes. Backbone works seamlesly with jQuery to add and remove listeners to the section of the DOM that it manages. The listeners are actually attached to the `el` property of the view, or the root element of the view. 

## Objectives 

1. Create namespace
2. Build View html string (look at spect to see what is expected)
3. Build out view with events (see below for example)
4. Add view to dom


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

Events are key value pairs:

1. The key has the event type it listens for like `click`, `submit`, `mouseenter`, followed by a space and then a css selector to scope where exactly the event listener should be listening within all the HTML managed by the view.
2. The value is a string that is the name of a function defined on the view.

In this lab you are going to add some HTML to the page using a Backbone view.  We're going to add a clickable element ("a link"), and we're going to stop the default behavior of the link and then simply write to the console.

## Resources
* [Delegating Events in Backbone](http://backbonejs.org/#View-delegateEvents)