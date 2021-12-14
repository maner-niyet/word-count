const input = document.querySelector('#input');
const output = document.querySelector('#output');


input.addEventListener('input', function(){
    let resultValue = input.value.replace(/ /g, "");
    output.innerText = resultValue.length;
})