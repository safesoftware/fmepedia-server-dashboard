function loadaverageruntime(host, token, repository) {
	//$.get('https://' + host + '/fmedatastreaming/' + repository + '/AverageRunTime.fmw?token=' + token, function(csv1) {
	//$.get('csvs/averageruntime.csv', function(csv1) {
	$.get('https://'+ host + '/fmerest/v2/resources/connections/FME_SHAREDRESOURCE_DATA/filesys/ServerDashboard/averageRunTime.csv?token=' + token, function(csv1) {
	    options2 = {
	        chart: {
	        	type: 'bar',
	        	renderTo: 'averageruntime'
	        },
	        data: {
	            csv: csv1
	        },
			title: {
				text: 'Average Workspace Run Time',
				style: {
					fontSize: '14px', 
					color: '#555555'
				}
			},
			legend: {
				enabled: false
			},
			tooltip: {
				valueSuffix: ' s',
				followPointer: true
			},
			yAxis: { 
				title: {
					text: 'Time in Seconds'
				},
				ceiling: 200
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true,
						format: '{y} s', 
						inside: true
					}
				}
			}
    	};
    	var chart = new Highcharts.Chart(options2);
    	if (chart.pointCount < 8){
    		resize(8, 'averageruntime', 40);
    	}
    	else{
    		resize(chart.pointCount, 'averageruntime', 40);
    	}
	});
}



