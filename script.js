let points = 0;

document.getElementById('scan-qr').addEventListener('click', function() {
    // Simulate earning points (you can implement QR code scanning here)
    points += 10;  // Adjust points based on the purchase
    document.getElementById('points').innerText = 'Points: ' + points;
});

document.getElementById('redeem').addEventListener('click', function() {
    if (points >= 50) { // Example threshold for redemption
        points -= 50; // Deduct points
        alert('You have redeemed your points for a free coffee!');
    } else {
        alert('Not enough points to redeem!');
    }
    document.getElementById('points').innerText = 'Points: ' + points;
});
