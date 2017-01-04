//CREACION DE WEBSOCKET
calceta = new WebSocket('ws://raspberrypi/ws');

var ret = [];
var i = 0;

//RECEPCION DE DATA
calceta.onmessage = function(msg){
    $('#out').html('Mensaje recibido: <b>' + msg.data + '</b>');
    i++;
    ret.push({a: msg.data, y: i,});
}