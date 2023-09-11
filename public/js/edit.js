async function editPostHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#post_title').innerHTML.trim();
    const body = document.querySelector('#post_body').innerHTML.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(title, body, post_id);
    document.location.replace(`/edit/${post_id}`);
}

document.querySelector('#edit-post-btn').addEventListener('click', editPostHandler);