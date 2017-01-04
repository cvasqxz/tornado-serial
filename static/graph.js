var grafo = Morris.Line({
element: 'grafo',
	data: ret,
	xkey: 'y',
	ykeys: ['a'],
	labels: ['Sensor']
});

var timer = setInterval(refresh, 1000);
function refresh () {
	grafo.setData(ret);
}