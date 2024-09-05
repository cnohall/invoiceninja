// public/js/payment-websocket.js
document.addEventListener('DOMContentLoaded', function () {
    var socket = new WebSocket(websocketUrl);

    socket.onopen = function (e) {
        console.log('WebSocket connection established');
    };

    socket.onmessage = function (event) {
        var data = JSON.parse(event.data);
        console.log('WebSocket message received:', data);
        const { status, message } = data;
        const paymentIsPartiallyConfirmed = status === 1;
        const paymentIsConfirmed = status === 2;

        if (paymentIsPartiallyConfirmed || paymentIsConfirmed) {
            fetch('/trigger-blockonomics-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector(
                        'meta[name="csrf-token"]'
                    ).content,
                },
                body: JSON.stringify({
                    payment_method: 64,
                    payment_type: 4,
                    amount: 100,
                    gateway_type_id: 4,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('Create Payment Response:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
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
