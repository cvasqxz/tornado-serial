calceta = new WebSocket('ws://raspberrypi/websocket');

calceta.onmessage = function(msg){
	var buffer  = $( "#out").text(); + '<br>' + msg.data;
    $('#out').html(buffer);
}