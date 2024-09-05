// public/js/payment-websocket.js
document.addEventListener('DOMContentLoaded', function () {
    var socket = new WebSocket(websocketUrl);

    socket.onopen = function (e) {
        console.log('WebSocket connection established');
    };

    socket.onmessage = function (event) {
        var data = JSON.parse(event.data);
        console.log('WebSocket message received:', data);
        // Handle incoming WebSocket messages
        // Update UI based on received data
    };

    socket.onclose = function (event) {
        if (event.wasClean) {
            console.log(
                `WebSocket connection closed cleanly, code=${event.code} reason=${event.reason}`
            );
        } else {
            console.log('WebSocket connection died');
        }
    };

    socket.onerror = function (error) {
        console.log(`WebSocket error: ${error.message}`);
    };
});
