const usersContainer = document.getElementById('users');

getData(`${API}/users`)
    .then(users => {
        for (const user of users) {
            const div = document.createElement('div');
            div.classList.add('block', 'user');

            const info = document.createElement('p');
            info.innerText = `${user.id}. ${user.name}`;

            const link = document.createElement('a');
            link.classList.add('btn');
            link.href = `user-details.html?id=${user.id}`;
            link.innerText = 'Детальніше';

            div.append(info, link);
            usersContainer.appendChild(div);
        }
    })
    .catch(error => showError(usersContainer, error));
