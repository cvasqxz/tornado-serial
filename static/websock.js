//CREACION DE WEBSOCKET
calceta = new WebSocket('ws://raspberrypi/ws');

var buff_a = [];
var buff_b = [];

//RECEPCION DE DATA
calceta.onmessage = function(msg){
    $('#out').html('Último mensaje recibido: <b>' + msg.data + '</b>');

    if (str.indexOf("A") == 0){
    	buff_a.push({a: msg.data, y: (new Date).getTime(),});
    }

    if (str.indexOf("B") == 0){
    	buff_b.push({a: msg.data, y: (new Date).getTime(),});
    }
    
}