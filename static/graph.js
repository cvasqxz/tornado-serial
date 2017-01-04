function cero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


var grafo = Morris.Line({
element: 'grafo',
	data: ret,
	xkey: 'y',
	ykeys: ['a'],
	hideHover: 'auto',
	labels: ['Sensor'],
	dateFormat: function(date) {
		d = new Date(date);
		return cero(d.getDate())+'/'+cero(d.getMonth()+1)+'/'+d.getFullYear()+' '+
		+cero(d.getHours())+':'+cero(d.getMinutes())+':'+cero(d.getSeconds()); 
	}
});

var timer = setInterval(refresh, 1000);
function refresh () {
	grafo.setData(ret);
}