(function (_G, _C, _M, me, undefined){
	/*
		TODO: Need to make this nice and generic
	*/

	var	// private variables
		myName = 'autopub', // this should always be included, you know, for completeness (and handy for passing into logs etc.)

		 // private functions
		doBindings,
		pub,

		// private detective
		magnumPI;

	// this function always destroys itself once it's initialised once
	me.init = function () {
		log('autopub init');
		doBindings();
		// this function always destroys itself once it's initialised once
		//me.init = function () {log('toy.' + myName + ' has already initialised')};
	};

	doBindings = function () {
		log('autopub, doBindings');
		$('body')
			.on('click', '[data-toy-autopub]', pub)	
			.on('touch', '[data-toy-autopub]', pub)	
			.on('submit','[data-toy-autopub]', pub);	
	};

	pub = function (e) {
		e.preventDefault();
		var $el = $(this),
			topic = $el.data('toyAutopub'),
			data = $el.data('toyAutomsg') || e;
		_M.pub(topic, data);
		log('pub', topic, data);
	};

	// ready to load motherflicker!
	toy.ready('autopub');

})(toy.GLOBALS, toy.CONFIG, toy.pubsub, toy.autopub = toy.autopub || {});