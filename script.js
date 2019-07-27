let name = document.querySelector('#name');
let income = document.querySelector('#income');
let submit = document.querySelector('#submit');
let nameText = document.querySelector('#nameText');

nameValue = "";
incomeValue = 0;
let arr = submit.onclick(nameValue, incomeValue);


submit.onclick = function (a, b) {
    let data = [];
    if (submit != null) {
        a = name.value;
        b = income.value;
        data.push(a);
        data.push(b);
    }
    return data;
}

window.onload = function(){
    if (nameText != null) {
        nameText.innerHTML = `Here you goes ${data[0]}`;
    }
}