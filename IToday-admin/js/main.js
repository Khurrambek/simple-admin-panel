const dropdownBtn = document.querySelector('#drop-btn');
const dropList = document.querySelector('.dropdown-list');

dropdownBtn.addEventListener('click', toggleDrop);

function toggleDrop () {
    dropList.classList.toggle('show')
}