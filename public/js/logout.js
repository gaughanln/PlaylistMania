const logoutButton = document.querySelector('.logout');

logoutButton.addEventListener('click', function(event) {
    fetch('/api/users/logout', {
        method: 'POST'
    });
    console.log("session should end");
});