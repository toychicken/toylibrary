toy.CONFIG = toy.CONFIG || {};
toy.CONFIG.tabs = {
	selected : 'selected',
	tab : 'tab'
};

(function (_G, _C, _M, me, undefined){
	/*
		TODO: Need to make this nice and generic
	*/

	var	// private variables
		myName = 'tabs', // this should always be included, you know, for completeness (and handy for passing into logs etc.)

		 // private functions
		findGroups,
		doBindings,
		selectTab,

		// private detective
		magnumPI;

	// this function always destroys itself once it's initialised once
	me.init = function () {
		findGroups();
		doBindings();
		// this function always destroys itself once it's initialised once
		me.init = function () {log('toy.' + myName + ' has already initialised')};
	};

	findGroups = function () {
		$('[data-toy-tabs]').each(function (i, v){});
	};

	doBindings = function () {
		_M.sub('/tabs/select', selectTab);
	};

	selectTab = function (tabGroup, ) {

	};

	pub = function (e) {
		e.preventDefault();
		var $el = $(this),
			topic = $el.data('msg');
		_M.pub(topic, e);
	};

	// ready to load motherflicker!
	toy.ready(myName);

})(toy.GLOBALS, toy.CONFIG.tabs, toy.pubsub, toy.tabs = toy.tabs || {});