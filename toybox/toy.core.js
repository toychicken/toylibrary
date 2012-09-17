var toy = toy || {}; // create namespace

(function (){
	/*
		TODO:
			Dependency handler for other toy. scripts
			Dependency handler for other 3rd party scripts
			Test harnesses & tests
			Demos
			Build scripts
			Minification
			Documentation
	*/
})();








/*! pubsub */

/*
File: pubsub.js
	pub/sub messaging system (library independent)
	Based on jQuery pub/sub plugin by Peter Higgins (dante@dojotoolkit.org)
	LG: Amended so you can overload the pub function rather than put the variables in an array
		Change priority of the if statement to test fs.CONF
		 first.
*/

(function(_G, _C, me, undefined){
	// the topic/subscription hash
	var cache = t.cache || {};

	m.pub = function(topic){
		var args = [].slice.call(arguments); // converts arguments to an array;
		args.shift(); // pop the topic from the first item.

		// summary: 
		//		Publish some data on a named topic.
		// topic: String
		//		The channel to publish on
		//
		// example:
		//		Publish stuff on '/some/topic'. Anything subscribed will be called
		//		with a function signature like: function(a,b,c){ ... }
		//
		//	|		fs.msg.pub("/some/topic", 'as', 'many', ['variables', 'as'], {'you' : 'like'});

		if(!cache[topic]){ return false; }
		var fns = cache[topic],
			x = 0;
		for (x; x < fns.length; x++){
			fns[x].apply(m, args || []);
		}
		return true;
	};

	m.sub = function(/* String */topic, /* Function */callback){
		//log('********** SUB',topic);
		// summary:
		//		Register a callback on a named topic.
		// topic: String
		//		The channel to subscribe to
		// callback: Function
		//		The handler event. Anytime something is fs.msg.pub'ed on a 
		//		subscribed channel, the callback will be called with the
		//		published array as ordered arguments.
		//
		// returns: Array
		//		A handle which can be used to unsubscribe this particular subscription.
		//	
		// example:
		//	|	fs.msg.sub("/some/topic", function(a, b, c){ /* handle data */ });
		//
		if(!cache[topic]){ cache[topic] = []; }
		cache[topic].push(callback);
		return [topic, callback]; // Array
	};

	m.unsub = function(/* string */handle, /* Function */ callback ){
		// summary:
	    //		Disconnect a subscribed function for a topic.
	    //      
		// handle: string
	    //		the return handle for the fs.msg.sub call.
	    // callback : function 
	    //      the function for a specific match. If not supplied, all matching functions will be unsubscribed
	    
		// example:
		//	|	var handle = fs.msg.sub("/something", function(){});
	    //	|	fs.msg.unsub(handle);

	    if (!cache[handle] || cache[handle].length <= 0) { // if it's not in the cache, no point trying to unsubscribe anything right?
	        log('no such topic subscribed', handle);
	        return false;
	    }

		var topics = cache[handle],
			x = 0;
	    
		for (x; x < topics.length; x++){
			if(topics[x] == callback){
				cache[handle].splice(x, 1);
			}
		}
	    return true;
	};


	/* shortcuts for logging functions */



	WIN.log = function(){
		if(!m.logging) { return false; }
		m.pub('/log', arguments);
	    return true;
	};

	if(WIN.console){ // only actually subscribe to log events if the console exists.
		m.sub('/log', function (args){
			var newarr = [].slice.call(args); // forces arguments to be treated like a normal array :)
			(typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
		});
	} else { // otherwise, keep a crude list of events
		m.sub('/log', function (args) {
			log.history = log.history || [];
			log.history.push(args);
		});
	}




	return m;

})(toy.GLOBALS, toy.CONFIG, toy.pubsub);