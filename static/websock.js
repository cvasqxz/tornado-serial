calceta = new WebSocket('ws://raspberrypi/websocket');

calceta.onmessage = function(msg){
    $('#out').html('<b>' + msg.data + '</b>');
}