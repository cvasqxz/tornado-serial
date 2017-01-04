calceta = new WebSocket('ws://raspberrypi/websocket');

calceta.onmessage = function(msg){
	var buffer = $('#out').text();
    $('#out').html(buffer + '<br>' + msg.data);
}