const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const emailEl = document.querySelector("#email");
    const passwordEl = document.querySelector("#password");
  
      const response = await fetch('/api/users/signUp', {
        method: 'POST',
        body: JSON.stringify({ email: emailEl.value.trim(),  password: passwordEl.value.trim() }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/artist');
      } else {
        alert('Failed to sign up.');
      }
    };

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);


