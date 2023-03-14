const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('placeholder').value.trim();
    const password = document.querySelector('placeholder').value.trim();

    if (email && password) {
        const response = await fetch('placeholder', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('placeholder');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('placeholder').value.trim();
    const email = document.querySelector('placeholder').value.trim();
    const password = document.querySelector('placeholder').value.trim();

    if (username && email && password) {
        const response = await fetch('placeholder', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('placeholder');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('placeholder')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('placeholder')
    .addEventListener('submit', signupFormHandler);