(function (me){

	initlist = [];

	me.init = function () {
		log('init!', initlist);
		$(initlist).each(function (i, v){
			toy[v].init();
		});


		// some test functions

	};

	me.ready = function (action) {
		initlist.push(action);
		return true;
	};
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
})(toy);