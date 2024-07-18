document.getElementById('dadJokeBtn').addEventListener('click', function (event) {
  event.preventDefault();

  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('jokeDisplay').textContent = data.joke;
    })
    .catch(error => {
      console.error('Error fetching dad joke:', error);
      document.getElementById('jokeDisplay').textContent = 'Failed to fetch a joke!';
    });
});