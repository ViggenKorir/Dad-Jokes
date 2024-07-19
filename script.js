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

const form = document.getElementById('userForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let comment = document.getElementById('comment').value;

  if (name === '' || email === '') {
    alert('Please fill in the required fields (name and email).');
    return;
  }

  let userData = {
    name: name,
    email: email,
    comment: comment
  };

 
});

