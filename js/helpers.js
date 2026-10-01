const API = 'https://jsonplaceholder.typicode.com';


function getData(url) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Помилка запиту: ' + response.status);
        }
        return response.json();
    });
}


function getParam(name) {
    return new URL(location.href).searchParams.get(name);
}


function buildObjectList(obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
        const li = document.createElement('li');
        const value = obj[key];

        if (typeof value === 'object' && value !== null) {
            li.innerHTML = `<b>${key}:</b>`;
            li.appendChild(buildObjectList(value));
        } else {
            li.innerHTML = `<b>${key}:</b> `;
            li.append(String(value)); // append як текст — безпечно
        }

        ul.appendChild(li);
    }

    return ul;
}

function showError(container, error) {
    container.innerHTML = `<p class="error">Не вдалося завантажити дані: ${error.message}</p>`;
}
