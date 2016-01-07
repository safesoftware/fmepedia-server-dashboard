
$(document).ready(function(){

	init();

});

	function init(){
		loadCharts('bluesky-safe-software.fmecloud.com', 'e2a23b8cd3833f7daae596d429749967b452cd6a', 'LaurasWorkspaces');
	}

	function loadCharts(host, token, repository){
		loadaverageruntime(host, token, repository);
		loadworkspaceruns(host, token, repository);
		loadjobsperengine(host, token, repository, 4);
		loadruntimeperengine(host, token, repository, 4);
	}

	function resize(pointCount, element, amount){
		var chartDiv = $('#' + element ).children([0]);
		chartDiv.height(pointCount * amount);
		window.dispatchEvent(new Event('resize'));
	}




