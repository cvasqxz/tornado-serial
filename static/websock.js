//CREACION DE WEBSOCKET
calceta = new WebSocket('ws://raspberrypi/ws');

var buff_a = [];
var buff_b = [];

//RECEPCION DE DATA
calceta.onmessage = function(msg){
    $('#out').html('Último mensaje recibido: <b>' + msg.data + '</b>');

    if (msg.data.indexOf("A") == 0){
    	buff_a.push({a: msg.data.substring(2), y: (new Date).getTime(),});
    }

    if (msg.data.indexOf("B") == 0){
    	buff_b.push({a: msg.data.substring(2), y: (new Date).getTime(),});
    }
    
}