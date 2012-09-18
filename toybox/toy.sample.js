/*
	File naming:
		Your file must be named the same as your module. i.e. if you're creating toy.sample, then the file should 
			be called toy.sample.js - case and hyphen use should be identical. Don't use other punctuation just, letters, numbers hyphen '-' and underscores '_', please
			i.e. you create toy.URL-magic_change, the file will be called toy.URL-magic_change.js
*/

// we're going to assume that you already have checked that your namespace is available

(function (_G, _C, _M, me, undefined){

	/*
		About this pattern
		Firstly, we use this pattern to namespace our code. This helps keep things nice and clear, and hopefully plays nice with other libraries & frameworks
		Secondly, we use the namespace to only expose the functions we want to. However, given this frameworks love of pub/sub, we should expect that very few functions apart from the me.init & me.ready should be exposed at all.

		Dependencies: TBC

		Global objects:
			For the moment, global objects will be all inside the toy. namespace, but passed through into the function to keep syntax a little clearer.
			On client side, core globals will be _G.win, _G.doc
	*/

	// like good little Crockfordians, we declare all our private variables and functions at the top with one single var statement... 

	var	// private variables
		myName = 'sample', // this should always be included, you know, for completeness (and handy for passing into logs etc.)

		 // private functions
		doSomething,

		// private detective
		magnumPI;

	me.init = function () {

		// this function always destroys itself once it's initialised once
		me.init = function () {log('toy.' + myName + ' has already initialised')};
	};

	toy.ready(myName); // this tells the toy initialiser that this script is ready to execute, and to be added to the init queue.

})(toy.GLOBALS, toy.CONFIG, toy.pubsub, toy.sample = toy.sample || {});