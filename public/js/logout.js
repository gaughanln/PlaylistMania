const logoutButton = document.querySelectorAll('.logout');

logoutButton.addEventListener('click', function(event) {
    fetch('/api/users/logout', {
        method: 'POST'
    });
    console.log("session should end");
});