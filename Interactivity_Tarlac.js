
const buttonContainer = document.getElementById('button-container');

const button = document.createElement('button');

button.textContent = 'Click Me!';

button.addEventListener('click', function() {
    alert('A little information to get to know Lana!');
});

buttonContainer.appendChild(button);