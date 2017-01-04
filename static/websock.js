//CREACION DE WEBSOCKET
calceta = new WebSocket('ws://raspberrypi/ws');

var ret = [];

//RECEPCION DE DATA
calceta.onmessage = function(msg){
    $('#out').html('Último mensaje recibido: <b>' + msg.data + '</b>');
    ret.push({a: msg.data, y: (new Date).getTime(),});
}