async function logout() {
    const response = await response.fetch("/api/users/logout", {
        method: 'post',
        headers : { 'content-Type': 'application/json'},
    });
    
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

document.querySelector('#logout-btn').addEventListener('click', logout);