async function loginFormHandler(event) {
    event.preventDefault();
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    //ensure both fields are filled out
    if (email && password) {
        const responst = await fetch("/api/users/login", {
            method: "post",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });
    } if (response.ok) {
        console.log(response, "Great Success!");
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }};

    async function signupFormHandler(event) {
        const username = document.querySelector("#username-signup").value.trim();
        const email = document.querySelector("#email-signup").value.trim();
        const password = document.querySelector('#password-signup').value.trim();

        if (username && email && password) {
            const response = await fetch("/api/users", {
                method: 'post', 
                body: JSON.stringify({
                    username, 
                    email,
                    password,
                    }),
                    headers: { 'Content-Type': 'application/json' },
                });
    }} if (response.ok) {
        console.log('success');
    } else {
        alert(response.statusText);
    } 

    const response2 = await fetch("/api/users/login", {
        method: 'post',
        body: JSON.stringify({
            email,
            password,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response2.ok) {
        console.log(response2, "Second Great Success!");
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }

    doccument.querySelector('#login-btn').addEventListener('click', loginFormHandler);
    document.querySelector('#signup-btn').addEventListener('click', signupFormHandler);


