/*
	File naming:
		Your file must be named the same as your module. i.e. if you're creating toy.sample, then the file should 
			be called toy.sample.js - case and hyphen use should be identical. Don't use other punctuation just, letters, numbers hyphen '-' and underscores '_', please
*/

// we're going to assume that you already have checked that your namespace is available

(function (my, undefined){

	/*
		About this pattern
		Firstly, we use this pattern to namespace our code. This helps keep things nice and clear, and hopefully plays nice with other libraries & frameworks
		Secondly, we use the namespace to only expose the functions we want to. However, given this frameworks love of pub/sub, we should expect that very few functions apart from the
			my.init & my.ready should be exposed at all.

		Dependencies: TBC

		Global objects
	*/



})(toy.sample)