calceta = new WebSocket('ws://raspberrypi/websocket');

calceta.onmessage = function(msg){
    $('#out').html(msg.data);
}