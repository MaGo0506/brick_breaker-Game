const canvas = document.getElementById('gameScreen');

const ctx = canvas.getContext('2d');

ctx.clearRect(0, 0, 800, 500);

ctx.fillStyle = '#0ff';
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = '#00f';
ctx.fillRect(200, 200, 30, 30);
