calceta = new WebSocket('ws://raspberrypi/websocket');

calceta.onmessage = function(msg){
	var buffer = $('#out').html();
    $('#out').html(buffer + '<br>Mensaje recibido: ' + msg.data);
}