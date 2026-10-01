const userId = getParam('id');
const userInfo = document.getElementById('userInfo');
const postsBtn = document.getElementById('postsBtn');
const postsContainer = document.getElementById('posts');

getData(`${API}/users/${userId}`)
    .then(user => {
        const title = document.createElement('h2');
        title.innerText = user.name;
        userInfo.append(title, buildObjectList(user));
    })
    .catch(error => showError(userInfo, error));

let postsLoaded = false;

postsBtn.addEventListener('click', () => {
    if (postsLoaded) {
        postsContainer.classList.toggle('hidden');
        return;
    }

    getData(`${API}/users/${userId}/posts`)
        .then(posts => {
            for (const post of posts) {
                const div = document.createElement('div');
                div.classList.add('block', 'post');

                const title = document.createElement('p');
                title.innerText = post.title;

                const link = document.createElement('a');
                link.classList.add('btn');
                link.href = `post-details.html?id=${post.id}`;
                link.innerText = 'Детальніше';

                div.append(title, link);
                postsContainer.appendChild(div);
            }
            postsLoaded = true;
        })
        .catch(error => showError(postsContainer, error));
});
