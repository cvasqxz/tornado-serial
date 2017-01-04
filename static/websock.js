//CREACION DE WEBSOCKET
calceta = new WebSocket('ws://raspberrypi/ws');

//RECEPCION DE DATA
calceta.onmessage = function(msg){
    $('#out').html('Mensaje recibido: ' + msg.data);
}

//ENVIO DE PETICION DE DATA CADA 1 SEGUNDO
var timer = setInterval(refresh, 1000);
function refresh(){ calceta.send("ok"); }