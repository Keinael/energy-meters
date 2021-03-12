let firstNum, secondNum;
let arr0 = [0, 0, 0, 0, 0];
let arr1 = [0, 0, 0, 0, 0];
let resultText = 'Result: ';

$('#electricity-meter').on('keyup', (event) => {
    if (event.target.className.includes('oldValue')) {
        arr0[event.target.id] = event.target.value;
    } else {
        arr1[event.target.id] = event.target.value;
    }
    firstNum = +arr0.join('');
    secondNum = +arr1.join('');
    result = secondNum - firstNum;
   $('#result').text(String(result));  
   $(`#${event.target.id}`).next().focus();
});

