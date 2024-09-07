// const loginBtn = document.getElementById('loginBtn');
// const registerBtn = document.getElementById('registerBtn');

// loginBtn.addEventListener('mouseover', () => {
//     registerBtn.style.width = '100%';
//     loginBtn.style.width = '75%';
// });

// registerBtn.addEventListener('mouseover', () => {
//     loginBtn.style.width = '100%';
//     registerBtn.style.width = '75%';
// });

// loginBtn.addEventListener('mouseout', () => {
//     loginBtn.style.width = '100%';
// });

// registerBtn.addEventListener('mouseout', () => {
//     registerBtn.style.width = '100%';
// });

document.querySelector('.dropbtn').addEventListener('click', function() {
    document.getElementById('dropdownContent').classList.toggle('show');
});

document.getElementById('closeDropdown').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the link from navigating
    document.getElementById('dropdownContent').classList.remove('show');
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('#closeDropdown')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

