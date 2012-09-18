/*
	File naming:
		Your file must be named the same as your module. i.e. if you're creating toy.sample, then the file should 
			be called toy.sample.js - case and hyphen use should be identical. Don't use other punctuation just, letters, numbers hyphen '-' and underscores '_', please
			i.e. you create toy.URL-magic_change, the file will be called toy.URL-magic_change.js
*/

// we're going to assume that you already have checked that your namespace is available

(function (_G, _C, _M, me, undefined){

	var isConsole = (_G.WIN.console) ? true : false;
	/* shortcuts for logging functions */
	
	_G.WIN.log = function(){
		if(!_C.logging) { return false; }
		_M.pub('/log', arguments);
	    return true;
	};

	if(isConsole){ // only actually subscribe to log events if the console exists.
		_M.sub('/log', function (args){
			var newarr = [].slice.call(args); // forces arguments to be treated like a normal array :)
			(typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
		});

	} else { // otherwise, keep a crude list of events
		_M.sub('/log', function (args) {
			log.history = log.history || [];
			log.history.push(args);
		});
	}


})(toy.GLOBALS, toy.CONFIG.log, toy.pubsub, toy.log = toy.log || {});