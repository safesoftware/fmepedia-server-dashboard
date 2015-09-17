
$(document).ready(function(){

	init();

});

	function init(){
		loadCharts('bluesky-safe-software.fmecloud.com', 'cfc33ff772dd1a80d89d7080b31321172520fa03', 'LaurasWorkspaces');
	}

	function loadCharts(host, token, repository){
		loadaverageruntime(host, token, repository);
		loadworkspaceruns(host, token, repository);
		loadjobsperengine(host, token, repository, 4);
		loadruntimeperengine(host, token, repository, 4);
	}

	function resize(pointCount, element, amount){
		var test = $('#' + element ).children([0]);
		test.height(pointCount * amount);
		$(window).resize();
	}




