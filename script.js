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

document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get user input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  //  handling empty submission
  if (name === '' || email === '') {
    alert('Please fill in the required fields (name and email).');
    return;
  }

  // Create a new user object
  const newUser = {
    name: name,
    email: email,
    comment: comment
  };

  // Make a POST request to add a new user
  fetch('http://localhost:3000/userData/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(response => response.json())
    .then(data => {
      console.log('User added:', data);
      // Optionally clear the form
      document.getElementById('userForm').reset();
      // Fetch updated user list
      fetchUsers();
    })
    .catch(error => {
      console.error('Error:', error);
    });
});









