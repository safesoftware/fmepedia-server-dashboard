var options;

function loadruntimeperengine(host, token, repository, numEngines){
	$.get('https://'+ host + '/fmerest/v2/resources/connections/FME_SHAREDRESOURCE_DATA/filesys/ServerDashboard/runtimePerEngine.csv?token=' + token, function(csv1) {
		
		options1 = {
			chart: {
				renderTo: 'runtimeperengine'
			},
			data: {
				csv: csv1
			},
			title: {
				text: 'Total Running Time of All Jobs',
				style: {
					fontSize: '14px', 
					color: '#555555'
				}
			},
			tooltip: {
				valueSuffix: ' s'
			},
			xAxis: {
				labels: {
					format: '{value:%b %d}',
					rotation: 0
				}
			},
			yAxis: {
				plotLines: [{
					width: 1,
					color: '#808080'
				}],
				min: 0,
				title: {
					text: 'Job Running Time in Seconds'
				}
			},
			series: 
			[ ]
		};

		for (var i=0; i<numEngines+1; i++){
			var markervar = {marker:{enabled:false}};
			options1.series.push(markervar);
		}

		var chart = new Highcharts.Chart(options1);
	});
};

