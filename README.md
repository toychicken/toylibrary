#Trying again with the toy library

##How to describe this?

It's sort of an application framework, rather than a library. 
It uses a simple pub/sub approach for messaging, that I hope can synchronise across front and backend (though am focussing on front-end to start with)
It's aimed at large scale e-commerce sites with legacy CMS systems, where codebases are often spread across many departments. It uses HTML5 main currency, rather than try and coerce these systems into giving up Mustache templates or JSON, where they're not designed to do so.

##Why?

I don't have any grand plans for this, I don't propose that it will be in the same order of awesomeness as Ember.js or Meteor.js, but possibly somewhere in the junior leagues of the same game :)

##Yes, I'm using jQuery (V.1.8.0)

Partly because it's already installed in many places, still manages to support IE6 and I want this framework to be easily accessible to novices. *Eventually* the aim is to only use vanilla.js...

#What about the CSS?

It's possible that CSS needs to be treated with the modules in the same way as the JS, but my gut says that it'll cause more problems than it cures. One giant CSS file compiled for your app? Perhaps. Maybe one 'Core CSS' with a small number of 'template CSS' files for each page. We'll work it out eventually.

##Tests

All my tests require qunit.js - http://qunitjs.com/