//CREACION DE WEBSOCKET
calceta = new WebSocket('ws://raspberrypi/ws');

//RECEPCION DE DATA
calceta.onmessage = function(msg){
    $('#out').html('Mensaje recibido: ' + msg.data);
}