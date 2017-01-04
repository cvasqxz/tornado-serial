//CREACION DE WEBSOCKET
calceta = new WebSocket('ws://raspberrypi/ws');

//RECEPCION DE DATA
calceta.onmessage = function(msg){
    $('#out').html('Mensaje recibido: <b>' + msg.data + '</b>');
}

var graphV = Morris.Line({
    element: 'grafo',
    data: [{"x": 0, "y": "1"}
    {"x": 0, "y": "1"}
    {"x": 0, "y": "1"}
    {"x": 0, "y": "1"}
    {"x": 0, "y": "1"}],
    xkey: 'y',
    xlabels: "second",
    ykeys: ['x'],
    labels: ['R'],
    lineColors: ['#FF6666'],
    linewidth: '3px',
    pointSize: '3px',
    hideHover: 'auto'
});