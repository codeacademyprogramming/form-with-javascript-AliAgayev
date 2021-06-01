const input = document.getElementsByClassName('.form-control');
const errorText = Array.from(document.querySelectorAll('.inputs-error'));
const button = document.querySelector('.my-custom-button');

button.onclick = function () {
    if (input.value) {
        errorText.classList.add('d-none');
        alert('You have successfully submitted this form');
        input.value = '';
        window.location.href = 'home.html';
    } else {
        errorText.classList.remove('d-none');
    }
}