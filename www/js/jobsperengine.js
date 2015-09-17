var options;

function loadjobsperengine(host, token, repository, numEngines){
	$.get('https://'+ host + '/fmerest/v2/resources/connections/FME_SHAREDRESOURCE_DATA/filesys/ServerDashboard/jobsPerEngine.csv?token=' + token, function(csv1) {
		options = {
			chart: {
				renderTo: 'jobsperengine'
			},
			data: {
				csv: csv1,
			}, 
			title: {
				text: 'Number of Jobs Run by Engine',
				style: {
					fontSize: '14px', 
					color: '#555555'
				}
			},
			yAxis: {
				plotLines: [{
					width: 1,
					color: '#808080'
				}],
				min: 0,
				title: {
					text: 'Number of Jobs'
				}
			},
			series: [ ]
		};

		for (var i=0; i<numEngines+1; i++){
			var markervar = {marker:{enabled:false}};
			options.series.push(markervar);
		}

		var chart = new Highcharts.Chart(options);
	});
};