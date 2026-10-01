const postId = getParam('id');
const postInfo = document.getElementById('postInfo');
const commentsContainer = document.getElementById('comments');
const backLink = document.getElementById('backLink');

getData(`${API}/posts/${postId}`)
    .then(post => {
        const title = document.createElement('h2');
        title.innerText = post.title;
        postInfo.append(title, buildObjectList(post));

        backLink.href = `user-details.html?id=${post.userId}`;
    })
    .catch(error => showError(postInfo, error));

getData(`${API}/posts/${postId}/comments`)
    .then(comments => {
        for (const comment of comments) {
            const div = document.createElement('div');
            div.classList.add('block', 'comment');
            div.appendChild(buildObjectList(comment));
            commentsContainer.appendChild(div);
        }
    })
    .catch(error => showError(commentsContainer, error));
