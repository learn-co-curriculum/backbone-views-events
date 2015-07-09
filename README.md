# Backbone.js: Views and Events

# Objectives
1. Objectives are most likely the first thing a student will see when looking at a lab Readme. Objectives are even more important for instructors to see the content of the lab to determine if it should be assigned for a given topic.

# Instructions
In this lab you are going to add some HTML to the page using a backbone view.  We're going to add a clickable element ("a link"), we're going to stop the default behavior of the link and then simply write to the console.
1. Break down steps students need to take to finish lab/get test passing

# Introduction
One of the jobs of views is to respond to events or user interaction.  So the view is responsible for a particular region of the user interface, and any user interaction that happens in that region should be handled by the view.  It's job is to listen for events and then call a function to update the model with any changes.  Backbone works seamlesly with jQuery to add and remove listeners to the section of the DOM that it manages.  The listeners are actually attached to the "el" of the view, or the root element of the view.  The events property of the view object looks like this

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
Events are key value pairs.
The key has the event type it listens for ie (click, submit, mouseenter) followed by a space and then a css selector to scope where exactly the event listener should be listening within all the HTML managed by the view.  The value is a string that is the name of a function defined on the view.