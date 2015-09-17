var options;

function loadworkspaceruns(host, token, repository){
	$.get('https://'+ host + '/fmerest/v2/resources/connections/FME_SHAREDRESOURCE_DATA/filesys/ServerDashboard/workspaceRuns.csv?token=' + token, function(csv1) {

		options = {
			chart: {
				type: 'bar',
				renderTo: 'workspaceruns'
			},
			data: {
				csv: csv1
			}, 
			title: {
				text: 'Total Number of Runs Per Workspace',
				style: {
					fontSize: '14px', 
					color: '#555555'
				}
			},
			plotOptions: {
				series: {
					stacking: 'normal'
				},
				bar: {
					dataLabels: {
						enabled: true,
						inside: true
					}
				}
			},
			legend: {
				floating: true,
				align: 'right',
				verticalAlign: 'top',
				layout: 'vertical',
				x: 0,
				y: 60,
				backgroundColor: '#FFFFFF'
			},
			tooltip: {
				followPointer: true
			},
			yAxis: {
				title: {
					text: 'Number of Jobs Run'
				},
				ceiling: 600
			},
			series: [{
				name: 'Successful',
				color: 'green'
			}, {
				name: 'Failure',
				color: 'red'
			}, {
				name: 'Cancelled',
				color: 'grey'
			}]
		};

		var chart = new Highcharts.Chart(options);
    	if (chart.pointCount < 8){
    		resize(8, 'workspaceruns', 40);
    	}
    	else{
    		resize(chart.pointCount, 'workspaceruns', 15);
    	}
	});
};

