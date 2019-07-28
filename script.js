let name = document.querySelector('#name');
let income = document.querySelector('#income');
let submit = document.querySelector('#submit');
let nameText = document.querySelector('#nameText');

if (submit != null) {
    submit.onclick = function () {
        localStorage.setItem('myName', name.value);
        localStorage.setItem('myIncome', income.value);
    }
}

if(nameText != null){
    nameText.innerHTML = `Here you go ${localStorage.getItem('myName')},`;
}