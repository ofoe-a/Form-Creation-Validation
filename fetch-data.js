async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    dataContainer.innerHTML = '';

    const response = await fetch(apiUrl);
    const users = await response.json();

    const userList = document.createElement('ul');

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 7: Handle errors
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchUserData);