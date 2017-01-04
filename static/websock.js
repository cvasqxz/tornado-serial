//CREACION DE WEBSOCKET
calceta = new WebSocket('ws://raspberrypi/ws');

var ret = [];
var i = 2000;
ret.push({a: 20, y: i,});

//RECEPCION DE DATA
calceta.onmessage = function(msg){
    $('#out').html('Mensaje recibido: <b>' + msg.data + '</b>');
    i++;
    ret.push({a: msg.data, y: i,});
}