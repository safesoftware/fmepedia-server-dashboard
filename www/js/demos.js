
$(document).ready(function(){

	init();

});

	function init(){
		loadCharts('demos-safe-software.fmecloud.com', '25cb940a56cbed639c09bb5733e92f9279e06267', 'ServerDashboard');
	}

	function loadCharts(host, token, repository){
		loadaverageruntime(host, token, repository);
		loadworkspaceruns(host, token, repository);
		loadjobsperengine(host, token, repository, 15);
		loadruntimeperengine(host, token, repository, 15);
	}

	function resize(pointCount, element, amount){
		var test = $('#' + element ).children([0]);
		test.height(pointCount * amount);
		$(window).resize();
	}




