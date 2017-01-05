function cero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var grafoA = Morris.Line({
element: 'grafoA',
	data: buff_a,
	xkey: 'y',
	ykeys: ['a'],
	hideHover: 'auto',
	lineColors: ['#FF3300'],
	linewidth: '3px',
	pointSize: '3px',
	labels: ['Sensor #1'],
	dateFormat: function(date) {
		d = new Date(date);
		return cero(d.getDate())+'/'+cero(d.getMonth()+1)+'/'+d.getFullYear()+' '+
		+cero(d.getHours())+':'+cero(d.getMinutes())+':'+cero(d.getSeconds()); 
	}
});

var grafoB = Morris.Line({
element: 'grafoB',
	data: buff_b,
	xkey: 'y',
	ykeys: ['a'],
	hideHover: 'auto',
	lineColors: ['#FF3300'],
	linewidth: '3px',
	pointSize: '3px',
	labels: ['Sensor #2'],
	dateFormat: function(date) {
		d = new Date(date);
		return cero(d.getDate())+'/'+cero(d.getMonth()+1)+'/'+d.getFullYear()+' '+
		+cero(d.getHours())+':'+cero(d.getMinutes())+':'+cero(d.getSeconds()); 
	}
});

var timer = setInterval(refresh, 1000);
function refresh () {
	grafoA.setData(buff_a);
	grafoB.setData(buff_b);
}