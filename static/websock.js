calceta = new WebSocket('ws://localhost/websocket');

calceta.onmessage = function(msg){
    $('#out').html(msg);
}}